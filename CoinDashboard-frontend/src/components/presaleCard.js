import StartIn from "./startIn"
import PricesBox from "./PricesBox"
import PrePayInput from "./prePayInput"
import PreReceiveInput from "./preReceiveInput"
import BuyTokenBox from "./buyTokenBox.js"
import AccessBox from "./accessBox"

import "./components.scss"
import { Divider } from "@mui/material"
import CountItem from "./countItem"

const PresaleCard = () => {
    return (
        <div className="w-full md:w-[407px] h-[430px] rounded-3xl p-6 border border-solid border-[#68F2C9] flex flex-col gap-5">
            <div className="w-full md:w-[359px] h-[326px] flex flex-col gap-4">
                <div className="text-[14px] leading-[17px] tracking-wide uppercase text-left">Pre-Sale Starts In</div>
                <div className="flex flex-row justify-between">
                    <CountItem title="DAYS" value='05'></CountItem>
                    <div className="flex flex-row items-center text-[32px] font-normal leading-[38.73px]">:</div>
                    <CountItem title="HRS" value='23'></CountItem>
                    <div className="flex flex-row items-center text-[32px] font-normal leading-[38.73px]">:</div>
                    <CountItem title="MIN" value='32'></CountItem>
                    <div className="flex flex-row items-center text-[32px] font-normal leading-[38.73px]">:</div>
                    <CountItem title="SEC" value='57'></CountItem>
                </div>
                <Divider />
                <PrePayInput title="Amount you pay"></PrePayInput>
                <PreReceiveInput title="Amount you receive"></PreReceiveInput>
                <div className="flex flex-col gap-2.5">
                    <Divider />
                    <div className="flex flex-row items-center justify-center gap-2 text-[14px] font-normal leading-[16.94px]">
                        <div className="flex flex-row items-center gap-1">
                            <img src='/assets/icon/ic_cdbd.svg' />
                            <span>1,000 CDBD</span>
                        </div>
                        =
                        <div className="flex flex-row items-center gap-1">
                            <img src='/assets/img/sol.svg' />
                            <span>1 SOL</span>
                        </div>
                    </div>
                </div>
            </div>
            <button className="w-full h-9 flex flex-row items-center justify-center rounded-3xl px-4 py-2 text-[14px] bg-cyan-500">Buy Now</button>
        </div>
    )
}

export default PresaleCard;