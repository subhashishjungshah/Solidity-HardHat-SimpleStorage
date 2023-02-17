// imports
const { ethers, run, network } = require("hardhat");
//async main
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying contract");
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.deployed();
  console.log(`Contract Adress : ${simpleStorage.address}`);
  // console.log(network.config);
  // if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
  //   await simpleStorage.deployTransaction.wait(6);
  //   await verify(simpleStorage.address, []);
  // }
  const currentFavNumber = await simpleStorage.retrieve();
  console.log(currentFavNumber.toString());
  const transactionResponse = await simpleStorage.store(10);
  await transactionResponse.wait(1);
  const updatedFavNumber = await simpleStorage.retrieve();
  console.log(updatedFavNumber.toString());
}

async function verify(contractAddress, agrs) {
  console.log("Verifying .....");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: agrs,
    });
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified"))
      console.log("Already Verified");
    else console.log(error);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
