// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC4626.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

/**
 * @title AssetVault
 * @dev Yield-bearing vault for a specific RWA.
 * Token holders deposit their AssetTokens into the vault to receive yield-bearing shares.
 */
contract AssetVault is ERC4626, AccessControl {
    bytes32 public constant DISTRIBUTOR_ROLE = keccak256("DISTRIBUTOR_ROLE");
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    constructor(
        IERC20 asset,
        string memory name,
        string memory symbol,
        address admin
    ) ERC4626(asset) ERC20(name, symbol) {
        _grantRole(DEFAULT_ADMIN_ROLE, admin);
        _grantRole(ADMIN_ROLE, admin);
        _grantRole(DISTRIBUTOR_ROLE, admin);
    }

    /**
     * @dev Simple yield distribution mechanism:
     * Revenue is transferred directly to the vault as 'assets'.
     * The share price (assets/shares) increases automatically.
     */
    function depositYield(uint256 amount) external onlyRole(DISTRIBUTOR_ROLE) {
        SafeERC20.safeTransferFrom(IERC20(asset()), msg.sender, address(this), amount);
        // Under ERC4626, the share price will increase as the 'totalAssets' increases without minting new shares.
    }

    /**
     * @dev Required override for ERC4626. Returns the total assets held by the vault.
     */
    function totalAssets() public view override returns (uint256) {
        return IERC20(asset()).balanceOf(address(this));
    }

    /**
     * @dev Support multi-role access control for system integrations.
     */
    function supportsInterface(bytes4 interfaceId) public view override(ERC20, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
