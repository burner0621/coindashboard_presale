import { useState, useCallback, useEffect } from 'react'
import "./pages.css"
import {
    useConnection,
    useWallet
} from "@solana/wallet-adapter-react";
import * as splToken from "@solana/spl-token";
import {
    TOKEN_PUBKEY,
} from "../constants"
import usePresale from "../hooks/usePresale.js"
import { Icon, IconType } from "../components/icons";
import { Divider } from "@mui/material"

const Claim = () => {

    const { claimToken, transactionPending } = usePresale();
    const { connection } = useConnection();
    const { publicKey } = useWallet();
    const [balance, setBalance] = useState (0)

    const getBalance = useCallback(async() => {
        if (publicKey && connection) {
            try{
                const tokenAddress = await splToken.getAssociatedTokenAddress(TOKEN_PUBKEY, publicKey)
                const tokenDetails = await splToken.getAccount(connection, tokenAddress)
                if (tokenDetails.amount) setBalance (Number(tokenDetails.amount) / 1000000)
            } catch (e) {
                console.log (e)
            }
        }
    }, [publicKey])

    useEffect(() => {
        getBalance()
    }, [getBalance])

    return (
        <div className="w-full flex flex-col items-center gap-6">
            <div className="w-full md:w-[503px] flex flex-col gap-4">
                <div className="font-normal text-[32px] md:text-[52px] leading-[62.4px] tracking-tight">
                    Claim your <span className="text-cyan-400">$CDBD</span>
                </div>
                <div className="text-base tracking-tight">Claim your $CDBD tokens today and unlock exclusive benefits soon.</div>
            </div>
            <div className="w-full md:w-[550px] border border-solid border-cyan-400 p-6 rounded-3xl flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                    <p>Your claimable amount</p>
                    <Divider />
                    <div className="h-[34px] flex flex-row gap-2 items-center justify-center">
                        <img src="/assets/icon/ic_cdbd.svg" width={'34px'} />
                        <div className="text-2xl">{balance}</div>
                    </div>
                </div>
                {transactionPending ? 
                    <div className="flex flex-row items-center justify-center">
                        <Icon type={IconType.LOADING} className="w-14 h-14" />
                    </div> : 
                    <button className="h-[36px] rounded-2xl bg-cyan-400 font-medium" onClick={claimToken}>Claim now</button>
                }
            </div>
        </div>
    );
}

export default Claim;