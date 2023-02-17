// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

contract SimpleStorage {
    uint favNumber;
    struct People {
        string name;
        uint favNumber;
    }
    People[] public people;
    mapping(string => uint256) public nameToFavoriteNumber;

    function store(uint256 _favNumber) public {
        favNumber = _favNumber;
    }

    function retrieve() public view returns (uint256) {
        return favNumber;
    }

    function addPerson(string memory personName, uint256 favNumb) public {
        people.push(People(personName, favNumb));
        nameToFavoriteNumber[personName] = favNumb;
    }
}
