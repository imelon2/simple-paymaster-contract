import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { ethers, Wallet } from "ethers";


let SALT = "0x0000000000000000000000000000000000000000000000000000000000004337";
SALT = process.env.SALT ?? SALT;

let privateKey = ethers.keccak256(ethers.toUtf8Bytes("paymaster"));
privateKey = process.env.PRIVATE_KEY ?? privateKey

let providerUrl = "http://127.0.0.1:8545"
providerUrl = process.env.PROVIDER_URL ?? providerUrl

function getNetwork(url: string): {
  url: string;
  accounts: string[];
} {
  return {
    url,
    accounts: [privateKey],
  };
}

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.28",
        settings: {},
      },
      {
        version: "0.8.20",
        settings: {},
      },
      {
        version: "0.8.13",
        settings: {},
      },
    ],
  },
  networks: {
    localhost: getNetwork("http://127.0.0.1:8545"),
    custom: getNetwork(providerUrl),
  },
  ignition: {
    strategyConfig: {
      create2: {
        salt:SALT,
      },
    },
  },
};

export default config;
