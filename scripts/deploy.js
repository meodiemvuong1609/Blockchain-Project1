const hre = require("hardhat");

async function main() {
  const TokenContract = await hre.ethers.getContractFactory("BlockchainSplitwise");
  const tokenContract = await TokenContract.deploy();
  await tokenContract.deployed();
  console.log(`tokenContract address: ${tokenContract.address}`)
}

main()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
