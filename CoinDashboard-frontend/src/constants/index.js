import { PublicKey } from "@solana/web3.js";

export const PRESALE_PROGRAM_PUBKEY = new PublicKey(
  "2g4jbSt1Z7PDYfRHKVXo38h75a7FcRsqxK9NVH7uusJu"
);

export const TOKEN_PUBKEY = new PublicKey(
  "GskrQp3zVbVWr9H61eYL7PXCraM79Rn6XSaiw7sWQhxL"
);

export const PRESALE_SEED = "CLUB_PRESALE_SEED";
export const USER_SEED = "CLUB_USER_SEED";
export const PRESALE_ID = 7;

export const PRESALE_AUTHORITY = new PublicKey(
  "dsz6dAzV49wAMx8Rg4Zb98QPPCPXbPFAwpa2TwmDM16"
);

export const TOKEN_PRESALE_HARDCAP = 10000000; // token
export const PRICE_PER_TOKEN = 0.005; // $
export const PRICE_DECIMAL = 8

export const BUYER_SOFTCAP = 0.2; // sol
export const BUYER_HARDCAP = 50; // sol
export const BUYER_TOKEN_HARDCAP = 50000000; // token

export const TOKEN_DECIMAL = 6;

export const SOL_TOKEN_PUBKEY = new PublicKey ("So11111111111111111111111111111111111111112")
export const USDC_TOKEN_PUBKEY = new PublicKey('2WQz34MuGZ1c86A6yFRt6L5mRVjEUxvct5EuwMfBG21Y')
export const USDT_TOKEN_PUBKEY = new PublicKey('A9bCEvAtMHqtBbhCQ7vqRNiZ4YKnXs1tZKpCz5cP2mNx')
export const JUP_TOKEN_PUBKEY = new PublicKey('DkiFBjyB2vwQjFDC6TnikfM6NkRchreWFz7Eqd17xfwg')

export const SOL_PRICEFEED_ID = new PublicKey('J83w4HKfqxwcq3BEMMkPFSppX3gqekLyLJBexebFVkix')
export const JUP_PRICEFEED_ID = new PublicKey('Gh9hscza9YaCzr84tNV1NZQfpqoL3csYnWDygDkQmBU2')