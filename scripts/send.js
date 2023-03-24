const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(//name of provider);

const privateKey = process.env.NAME_OF_VARIABLE;
const senderWallet = new ethers.Wallet(privateKey, provider);

async function sendEther(to, value) {
  const tx = await senderWallet.sendTransaction({
    to: to,
    value: value,
  });
  console.log(`Transaction sent: ${tx.hash}`);
}

const recipientAddress = //address of the escrow contract;
const etherAmount = ethers.utils.parseEther("1");

sendEther(recipientAddress, etherAmount);
