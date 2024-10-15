if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const { createAuthenticatedClient, OpenPaymentsClientError } = require('@interledger/open-payments');


const wallet = async () => {
        const client = await createAuthenticatedClient({
        keyId: process.env.KEY_ID,
        privateKey: process.env.PRIVATE_KEY,
        walletAddressUrl: process.env.WALLET_ADDRESS_URL
    })
    const walletAddress = await client.walletAddress.get({
        url: process.env.WALLET_ADDRESS_URL
    })
    const walletAddressKeys = await client.walletAddress.getKeys({
        url: process.env.WALLET_ADDRESS_URL,
    });

    console.log(`Wallet Address`, walletAddress, walletAddressKeys);
    //console.log(`Wallet Address Keys`, walletAddressKeys);
    
}

wallet();

//console.log(process.env.KEY_ID);
