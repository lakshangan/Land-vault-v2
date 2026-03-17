import hre from "hardhat";

async function main() {
  console.log("Starting deployment to Base Sepolia...");

  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // 1. Deploy AssetRegistry
  const AssetRegistry = await hre.ethers.getContractFactory("AssetRegistry");
  const assetRegistry = await AssetRegistry.deploy();
  await assetRegistry.waitForDeployment();
  console.log("AssetRegistry deployed to:", await assetRegistry.getAddress());

  console.log("Deployment completed successfully on Base Sepolia.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
