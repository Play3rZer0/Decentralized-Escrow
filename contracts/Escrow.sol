//SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

contract Escrow {
    address public arbiter;
    address public beneficiary;
    address public depositor;

    bool public isApproved;

    event Deposited(address, uint);
    event Deployed(address);
    event Approved(uint, bool);
    event NewEscrow(address, address);

    receive() external payable {
        require(isApproved == false, "Contract has already been approved");
        require(msg.sender == depositor, "Not Depositor");
        require(msg.value > 0, "Invalid Amount");
        emit Deposited(msg.sender, msg.value);
    }

    constructor(address _arbiter, address _beneficiary) payable {
        require(msg.sender != _arbiter, "Depositor cannot be arbiter");
        require(msg.sender != _beneficiary, "Depositor cannot be beneficiary");
        arbiter = _arbiter;
        beneficiary = _beneficiary;
        depositor = msg.sender;
        emit Deployed(msg.sender);
    }

    function checkTotalBalance() external view returns (uint) {
        return address(this).balance;
    }

    function setNewEscrow(address _arbiter, address _beneficiary) external {
        require(msg.sender == depositor, "Not the depositor");
        require(msg.sender != _arbiter, "Depositor cannot be arbiter");
        require(msg.sender != _beneficiary, "Depositor cannot be beneficiary");
        arbiter = _arbiter;
        beneficiary = _beneficiary;
        isApproved = false;
        emit NewEscrow(arbiter, beneficiary);
    }

    function approve() external {
        require(address(this).balance > 0, "No funds deposited to approve");
        require(msg.sender == arbiter, "You are not the arbiter");
        uint balance = address(this).balance;
        (bool sent, ) = payable(beneficiary).call{value: balance}("");
        require(sent, "Failed to send Ether");
        isApproved = true;
        emit Approved(balance, isApproved);
    }
}
