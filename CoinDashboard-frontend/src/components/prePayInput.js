import { useContext, useState } from 'react'
import ThemeContext from '../context/themeContext';
import { FaAngleDown, FaAngleRight, FaAngleUp } from 'react-icons/fa';

import "./components.scss"
import FOLD from "../assets/img/fold.svg"
import SPREAD from "../assets/img/spread.svg"

const PrePayInput = (props) => {

    const tokens = useContext(ThemeContext);

    const [drop, setDrop] = useState(false);
    const [dropIndex, setDropIndex] = useState(0);

    const handleDrop = () => {
        setDrop(!drop);
    }

    const handleDropItem = (idx) => {
        setDropIndex(idx);
        // console.log(idx);
    }

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-between items-center">
                <div className="text-[14px] leading-[16.94px]">
                    {props.title}:
                </div>
                <div className="flex flex-row gap-0.5 text-[13px] font-medium leading-[15.73px] text-white/60 items-center">
                    <img src='/assets/img/wallet.svg' />
                    <div> 0 {tokens[dropIndex].ft}</div>
                </div>
            </div>
            <div className="h-[41px] flex flex-row pl-3 rounded-[32px] bg-[#08131799] border border-solid border-[#68F2C9] relative items-center">
                <div className="border-none rounded-[10px] w-[90%]">
                    <div className='flex flex-row items-center'>
                        <img src={tokens[dropIndex].icon} alt={tokens[dropIndex].ft} className='w-4 h-4'></img>
                        <input placeholder="0" className="px-1 w-full bg-transparent text-sm font-semibold focus:outline-none"></input>
                    </div>
                </div>
                <div className="bg-[#08363F] min-w-[82px] relative rounded-r-[32px] px-2 py-3 h-[95%] cursor-pointer flex flex-row items-center" onClick={handleDrop}>
                    <div className="w-full h-full flex flex-row gap-1 justify-between z-10 items-center">
                        <div className='flex flex-row items-center gap-1'>
                            <img src={tokens[dropIndex].icon} alt={tokens[dropIndex].ft} className='token-icon'></img>
                            <p className='text-[14px] font-medium leading-[16.94px]'>{tokens[dropIndex].ft}</p>
                        </div>
                        {drop ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                    {drop &&
                        <div className="dropdown-token-list">
                            {tokens.map((token, idx) => {
                                return (
                                    dropIndex !== idx && <div className="dropdown-token-item" onClick={() => handleDropItem(idx)}  ><img src={token.icon} alt={token.ft} className='token-icon'></img>{token.ft}</div>
                                )
                            })}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default PrePayInput;