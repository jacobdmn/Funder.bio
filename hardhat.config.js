/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.9",
    defaultNetwork: "goerli",
    networks: {
      hardhat: {},
      goerli: {
        url: `${process.env.ALCHEMY_API_KEY}` || "",
        accounts: [`${process.env.PRIVATE_KEY}`],
      },
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
    etherscan: {
      apiKey: process.env.ETHERSCAN_API_KEY,
    },
    gasReporter: {
      enabled: process.env.GAS_REPORT != undefined,
      currency: "USD",
    },
  },
};
