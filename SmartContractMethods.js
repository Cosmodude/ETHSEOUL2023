// set "type": "module" in package.json
import { ethers } from "ethers";
import { config as loadEnv } from 'dotenv';
import { promises } from "fs";
const fsPromises = promises;
loadEnv();

const PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;
const BASIC_CONTRACT_ADDRESS = "0x34bf23FFB6Fe39fc3Bf4a21f08690a8652653b50";
const UPDATED_CONTRACT_ADDRESS = "0x06D825d9303f02B4BfCE5D49504aF33aeeb8e4e1";
const my_address = "0x6f9e2777D267FAe69b0C5A24a402D14DA1fBcaA1";
const Summer_address = "0x19294812D348aa770b006D466571B6D6c4C62365";
const BASIC_ABI_FILE_PATH = './ABI/ERC1155Basic.json';
const UPDATED_ABI_FILE_PATH = './build/contracts/POM.json'

const provider = ethers.getDefaultProvider(`https://rpc.chiado.gnosis.gateway.fm`);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

async function getAbi(){
    const data = await fsPromises.readFile(UPDATED_ABI_FILE_PATH, 'utf8');
    const abi = JSON.parse(data)['abi'];
    //console.log(abi);
    return abi;
}
const abi = await getAbi();

//const my_contract = new ethers.Contract(DEPLOYED_CONTRACT_ADDRESS, abi, signer);
const my_contract = new ethers.Contract(UPDATED_CONTRACT_ADDRESS, abi, signer);
//console.log(my_contract);

export async function mintToken(userAddress, _id) {
    let id = 0;
    const mint_tx = await my_contract.mint(userAddress, 0, 1, '0x0102');  // second argumnent is id
    return mint_tx;
}

export async function setURI(userAddress) {
    const newURI = await my_contract.setURI('ipfs://Qmdtyqjx5ha9dBda6ZE5dc2N4vB8oAZYrLhGQj5jAah2RF/');
    //console.log(uri);
    return newURI.hash;
}

export async function pause() {
    const paused = await my_contract.pause();
    return paused;
}

export async function unpause() {
    const unpaused = await my_contract.unpause();
    return unpaused;
}

async function addAdmin(adminAddress) {
    const newAdmin = await my_contract.addAdmin(adminAddress);
    return newAdmin;
}
// Methods for checking Contracts functionality

/*
const mint = await mintToken(my_address);
const receipt = await provider.waitForTransaction(mint.hash);
console.log('Transaction confirmed in block:', receipt.blockNumber);
const tokenCounter = await my_contract.tokenCounter();
const supply = await my_contract.totalSupply(0);
console.log(tokenCounter);
console.log(supply);
*/
//const exists = await my_contract.exists(10);
//console.log(exists);
//const paused = pause();
//const unpaused = unpause();


// Functions to add new admin

/*
const newAdmin = await my_contract.addAdmin(Summer_address);
console.log(newAdmin);
*/

// Mint
//const mint = await mintToken(my_address);
//console.log(mint);




