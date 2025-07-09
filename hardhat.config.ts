import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from 'dotenv';
dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.28',
        settings: {},
      },
      {
        version: '0.8.20',
        settings: {},
      },
      {
        version: '0.8.13',
        settings: {},
      }
    ],
  },
  networks:{
    localhost:{
      url:'http://127.0.0.1:8545',
      accounts:[process.env.PRIVATE_KEY!]
    }
  },
  ignition: {
    strategyConfig: {
      create2: {
        salt:"0x0000000000000000000000000000000000000000000000000000000000004337"
      },
      
    }
  }
};

export default config;
