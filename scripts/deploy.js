const hre = require("hardhat");

async function main() {
  const Escrow = await hre.ethers.getContractFactory("Escrow");
  const escrow = await Escrow
    .deploy
    //address of the arbiter,
    //address of the beneficiary
    (); //Replace the values for the arbiter and beneficiary address

  await escrow.deployed();

  console.log(`Contract was deployed to ${escrow.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
