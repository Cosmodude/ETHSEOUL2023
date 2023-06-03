import { ethers } from "ethers";
import { config as loadEnv } from 'dotenv';
import { promises } from "fs";
loadEnv();
// set "type": "module" in package.json

const fsPromises = promises;

const PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;
const DEPLOYED_CONTRACT_ADDRESS = "0x34bf23FFB6Fe39fc3Bf4a21f08690a8652653b50";
//const ABI_FILE_PATH ='./build/ABI/ERC1155Basic_ABI.json';
const ABI_FILE_PATH ='./build/contracts/ERC1155Basic.json'

const provider = ethers.getDefaultProvider(`https://rpc.chiado.gnosis.gateway.fm`);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

async function getAbi(){
    const data = await fsPromises.readFile(ABI_FILE_PATH, 'utf8');
    const abi = JSON.parse(data)['abi'];
    //console.log(abi);
    return abi;
}
const abi = await getAbi();

const new_contract = new ethers.Contract(DEPLOYED_CONTRACT_ADDRESS, abi, signer);

console.log(new_contract);

