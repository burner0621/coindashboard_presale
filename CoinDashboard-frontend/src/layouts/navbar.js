import "./layouts.css"
import PreButton from "../components/preButton";

const Navbar = () => {
    return (
        <div className="mx-4 md:mx-[40px] lg:mx-[160px] h-[80px]  flex flex-row gap-2 items-center justify-between z-50">
            <div className="w-[200px] h-10 flex flex-row items-center gap-2.5">
                <img src="/assets/icon/ic_cdbd.svg" />
                <p className="text-xl font-semibold">Coin<span className="text-sky-700">Dashboard</span></p>
            </div>
            <div className="hidden md:block  w-[370px] h-[40px] p-px overflow-hidden bg-gradient-to-b from-[#68F2C9] to-[#68F2C91C] rounded-3xl flex ">
                <div className="w-full h-full bg-[#04302EFF] flex flex-row gap-[28px] items-center justify-center">
                    <p className="text-sm font-medium">Home</p>
                    <p className="text-sm font-medium">Product</p>
                    <p className="text-sm font-medium">Pricing</p>
                    <p className="text-sm font-medium">Team</p>
                    <p className="text-sm font-medium">FAQ</p>
                </div>
            </div>
            <button className="h-9 flex flex-row items-center justify-center rounded-3xl px-4 py-2 text-[14px] bg-cyan-500">Connect Wallet</button>
        </div>
    );
}

export default Navbar;