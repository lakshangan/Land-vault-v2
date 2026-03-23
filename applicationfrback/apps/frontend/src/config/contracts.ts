import AssetRegistryABI from '../abis/AssetRegistry.json';

export const ASSET_REGISTRY_ADDRESS = '0x9e2474ecE0eDBa7A7A540d6bcE162489eB409B0E'; // TO BE UPDATED AFTER DEPLOYMENT

export const CONTRACTS = {
  ASSET_REGISTRY: {
    address: ASSET_REGISTRY_ADDRESS as `0x${string}`,
    abi: AssetRegistryABI,
  },
};
