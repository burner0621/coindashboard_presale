import "./components.scss"
import CoinImg from "../assets/img/pre-coin.png"

const PreReceiveInput = (props) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-between items-center">
                <div className="text-[14px] font-normal leading-[16.94px]">
                    {props.title}:
                </div>
                <div className="flex flex-row gap-0.5 text-[13px] font-medium leading-[15.73px] text-white/60 items-center">
                    <img src='/assets/img/wallet.svg' />
                    <div> 0 CDBD</div>
                </div>
            </div>
            <div className="h-[41px] flex flex-row pl-3 rounded-[32px] bg-[#08131799] border border-solid border-[#68F2C9] relative items-center">
                <img src='/assets/icon/ic_cdbd.svg' />
                <div className="presale-pay-input-tag">
                    <input placeholder="0" className="px-1 w-full bg-transparent text-sm font-semibold focus:outline-none"></input>
                </div>
            </div>
        </div>
    );
}

export default PreReceiveInput;