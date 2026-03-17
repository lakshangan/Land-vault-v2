// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

/**
 * @title AssetRegistry
 * @dev Manages Real World Asset (RWA) representation as NFTs.
 * Each NFT represents a unique physical asset with associated metadata.
 */
contract AssetRegistry is ERC721, ERC721URIStorage, AccessControl, ReentrancyGuard {
    bytes32 public constant VALIDATOR_ROLE = keccak256("VALIDATOR_ROLE");
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    uint256 private _nextTokenId;

    struct AssetMeta {
        string assetType;
        uint256 valuation;
        uint256 timestamp;
        bool isVerified;
    }

    mapping(uint256 => AssetMeta) public assetMetas;

    event AssetMinted(uint256 indexed tokenId, string assetType, uint256 valuation, string uri);
    event AssetValuationUpdated(uint256 indexed tokenId, uint256 newValuation);

    constructor() ERC721("LandVault RWA", "LVRWA") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
        _grantRole(VALIDATOR_ROLE, msg.sender);
    }

    /**
     * @dev Mints a new RWA NFT. Only callable by VALIDATOR_ROLE.
     */
    function mintAsset(
        address to,
        string memory assetType,
        uint256 valuation,
        string memory uri
    ) public onlyRole(VALIDATOR_ROLE) nonReentrant returns (uint256) {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);

        assetMetas[tokenId] = AssetMeta({
            assetType: assetType,
            valuation: valuation,
            timestamp: block.timestamp,
            isVerified: true
        });

        emit AssetMinted(tokenId, assetType, valuation, uri);
        return tokenId;
    }

    /**
     * @dev Updates the valuation of an asset.
     */
    function updateValuation(uint256 tokenId, uint256 newValuation) public onlyRole(VALIDATOR_ROLE) {
        if (ownerOf(tokenId) == address(0)) revert("Asset does not exist");
        assetMetas[tokenId].valuation = newValuation;
        assetMetas[tokenId].timestamp = block.timestamp;

        emit AssetValuationUpdated(tokenId, newValuation);
    }

    // Required overrides for ERC721URIStorage
    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721URIStorage, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
