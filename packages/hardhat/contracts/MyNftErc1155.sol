//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract MyNftErc1155 is Ownable, ERC1155 {
    string private baseURI;
    string public name = "!Awesome nft!";
    string public symbol = "!AWESOME!";
    uint256 public tokenId = 0;
    
    constructor() Ownable() ERC1155("") {
    }

    function setBaseURI(string calldata _uri) external onlyOwner {
        baseURI = _uri;
    }
    function setBaseUriAndIncrementTokenId(string calldata _uri) external onlyOwner {
        baseURI = _uri;
        tokenId++;
    }

    function airdrop(address[] memory addresses) external onlyOwner {
        for (uint i = 0; i < addresses.length; i++) {
            _mint(addresses[i], tokenId, 1, "");
        }
    }

    function uri(uint256) public view virtual override returns (string memory) {
        return baseURI;
    }
}