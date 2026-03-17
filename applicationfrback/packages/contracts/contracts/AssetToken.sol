// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";

/**
 * @title AssetToken
 * @dev Fractional ownership of a Real World Asset.
 * Each contract represents shares in a specific asset.
 */
contract AssetToken is ERC20, AccessControl, Pausable {
    uint256 public constant MAX_SUPPLY = 10**9 * 10**18; // 1 Billion tokens
    uint256 public immutable assetTokenId;

    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        uint256 _assetTokenId,
        address admin
    ) ERC20(name, symbol) {
        _grantRole(DEFAULT_ADMIN_ROLE, admin);
        _mint(admin, initialSupply);
        assetTokenId = _assetTokenId;
    }

    /**
     * @dev Only admin can pause transfers in case of legal/compliance issues.
     */
    function pause() public onlyRole(DEFAULT_ADMIN_ROLE) {
        _pause();
    }

    function unpause() public onlyRole(DEFAULT_ADMIN_ROLE) {
        _unpause();
    }

    // Overriding transfer to include pausable check
    function _update(address from, address to, uint256 amount) internal override whenNotPaused {
        super._update(from, to, amount);
    }
}
