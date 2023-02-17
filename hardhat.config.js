require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const GEORLI_RPC_URL =
  "https://eth-goerli.g.alchemy.com/v2/WbhLgOwBXeax-BII12LaKZeqYjFBJ17W";
module.exports = {
  networks: {
    georli: {
      url: GEORLI_RPC_URL,
      accounts: [
        "2c84019b514a700638fd59d754db7ee3ccc006ce108314a45e8f38e0d2c4f9c4",
      ],
      chainID: 5,
    },
  },
  solidity: "0.8.17",
};
