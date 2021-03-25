require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success stool dash soap coconut grid private fringe gesture'; 
let testAccounts = [
"0x65282adb7bfb7faf675c210942a18838933978cc995c1adcdc1bde07248067e3",
"0x77d4a3068eab6b04b3950d0dbe2d87fb1b5fc9f4b6a629138151273cc0f853d8",
"0x52f8e040701d2a87a8eab03b0b6bf004cd48db4f513a2ab8b58ce1373a65c2a4",
"0x6a5cff12ce769d57ee35cc10c01e7de5e24799ebe5ae1e5609a06812266b4308",
"0x5be1538d197d0211c0b2a7f1f94d9b24822e14a88b012583858ef95e4afeee0e",
"0x94a3a5452892c99583d407afa05c9c1986fcec4f767baf0054f0d71168ad77b6",
"0x3033840f156b6f924f62102c7c6d50bcc9f3bd050235798343c749701f8ce281",
"0x17fb74cd8426dc78dc335fff711fcf1b6541e3c6fb1203c2ca0887d8a04ecf93",
"0x19cb497159973b1a53c7413aa3e93c978330bb2ea69e2de50f9df3ea6208e0a5",
"0xd154dc61ac593e61fd5e60f54d0051f96aa375a459b1984e7e4210c37147dd3f"
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
