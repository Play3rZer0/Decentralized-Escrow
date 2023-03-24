Escrow smart contract project using a decentralized network (Ethereum).

Source Code: Javascript (ES5 and up) and Solidity (0.8.18)
Framework: Ethers.JS and React
IDE: Hardhat

==============

Concept: An escrow implementation that uses a third party, but implemented on
a blockchain. This adds the benefits of transparency and immutable record of
the transaction. The third party cannot manipulate or change the amount in the
deposit, nor can they steal the funds.

The funds are locked in the smart contract, and can only be released to the
beneficiary with the approval from the arbiter. The arbiter cannot take the funds
and the depositor cannot overturn a deposit they made to the escrow.

==============

The escrow involves three parties:

1. Arbiter - The approver of the transfer of funds
2. Beneficiary - The recipient of the funds in escrow
3. Depositor - The depositor of the funds held in the contract

The 'arbiter', 'beneficiary' and 'depositor' are EOA while the escrow is a contract
with an address on the blockchain.

The contract is deployed by the 'depositor', which takes the addresses of the 'arbiter'
and 'beneficiary' as parameters.

There are strict rules for who can call the functions. A depositor cannot be an arbiter or beneficiary to the escrow.

A contract must be funded in order to release funds. It can also be reset to accept new
deposits. Only the arbiter can approve the release of funds, while the depositor can
reset the contract after funds have been released.

Depositor is the owner of the contract, and is the only EOA that is permitted to
send funds using the receive() function.

Arbiter is the only EOA that is allowed to release the funds to the beneficiary of the
contract. No other account is allowed to use the approve() function.

==============

There are 4 events in this contract:

Deposited(address, uint)
Deployed(address)
Approved(uint, bool)
NewEscrow(address, address)

Deposited is emitted when the depositor makes a deposit of funds to the contract.
Deployed emits the contract deployment event.
Approved is the approval event for the release of funds.
NewEscrow is when the contract is reset and allowed to accept new deposits.

==============

Included in this project are scripts with the following functions:

approve.js - Allows only the arbiter to make the call for releasing funds and setting
the variable isApproved = true. The function approve() is invoked from the contract.

checkbalance.js - A read function that returns the total deposited balance to the
escrow made by the depositor.

deploy.js - Allows for deployment to a blockchain, test or production. The deployer will
automatically be designated as the depositor to the escrow contract.

newescrow.js - This resets the contract to allow new deposit after the release of the
initial funds. Only the depositor can call this function, and it resets the value of
isApproved = false.

send.js - Deposit funds to the escrow. Only the depositor is allowed to send ETH, while
all other EOA are not allowed.

==============

Test this project on local blockchain first (e.g. RPC Provider), and then a test network (e.g. Goerli).

IMPORTANT: For security purposes, this project masks private data like the private key
using environment variables. The dotenv library is installed to allow developers to
protect data.

Install the dotenv module -> npm i dotenv
Create a .env file in the root folder of the project
Add your environment variables
