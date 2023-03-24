const ethers = require("ethers");

const network = //name of provider or endpoint to the blockchain;

const provider = ethers.getDefaultProvider(network);
const address = //address of the contract;

provider.getBalance(address).then((balance) => {
  // convert a currency unit from wei to ether
  const balanceInEth = ethers.utils.formatEther(balance);
  console.log(`balance: ${balanceInEth} ETH`);
});
