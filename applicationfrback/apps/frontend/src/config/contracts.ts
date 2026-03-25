import AssetRegistryABI from '../abis/AssetRegistry.json';

export const ASSET_REGISTRY_ADDRESS = '0x9e2474ece0edba7a7a540d6bce162489eb409b0e'; // TO BE UPDATED AFTER DEPLOYMENT

export const CONTRACTS = {
  ASSET_REGISTRY: {
    address: ASSET_REGISTRY_ADDRESS as `0x${string}`,
    abi: AssetRegistryABI,
  },
};
