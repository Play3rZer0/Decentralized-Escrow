const hre = require("hardhat");
const { ethers, providers } = require("ethers");

const CONTRACT_ADDR = //address of the contract;
const provider = new ethers.providers.JsonRpcProvider(//name of provider);
const signer = new ethers.Wallet(process.env.TESTNET_PRIVATE_KEY, provider);

async function main() {
  const escrowcontract = await hre.ethers.getContractAt(
    "Escrow",
    CONTRACT_ADDR
  );

  const tx = await escrowcontract
    .connect(signer)
    .setNewEscrow(
      //address of the arbiter,
      //address of the beneficiary
    );
  console.log("New Escrow Set");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
