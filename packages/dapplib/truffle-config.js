require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note scrub erosion good argue bubble giant'; 
let testAccounts = [
"0xc170cbd3340398b04b98e965acb2258d150424e374de2a0a27db74658d186758",
"0x98e9391120222c0d72b0e0e5f16ec04f05da3782f3109f5247bfa69fb002e121",
"0x56a3355a0f140e6c584337362b3c1a2bf7e4f262bc9bdae5a27298f582898f60",
"0x50da2c8b38670d2941a1b19ad35da7ccb4331bca6233cec06e4e6cdf6caf72e3",
"0x272d4662b9464bba95fd44f1c95d06c07e89e139ce06a8d7206ee037b2c39fbc",
"0xc70809dff6726a1b825738c2abac54eb32b03ac62c87097b96e12e3aa86a7518",
"0xe74e55106f4bcb012e50bc18eec2072a7109418f86517fce3d5034f3e657b122",
"0xdc5dc36deb26b30504da3e3c995a4067991ad4da668649dc70be33365ef79886",
"0x20989f28f19839d2022838f4bb76794c97cf795dba79d84c947ad1da4b6b926e",
"0x2a699e4d3403ff3b32b86eda7bfdf2087e43e8c3fc2f50b94a4d123a01d2798d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
