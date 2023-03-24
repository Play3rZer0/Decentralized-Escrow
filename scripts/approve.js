const hre = require("hardhat");
const { ethers, providers } = require("ethers");

const CONTRACT_ADDR = //Add the contract address of deployed contract here;
const provider = new ethers.providers.JsonRpcProvider(//add provider);
const signer = new ethers.Wallet(process.env.NAME_OF_VARIABLE, provider);

async function main() {
  const escrowcontract = await hre.ethers.getContractAt(
    "Escrow",
    CONTRACT_ADDR
  );

  const tx = await escrowcontract.connect(signer).approve();
  console.log("Approved");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
