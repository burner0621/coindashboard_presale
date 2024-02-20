import React, { useMemo } from 'react';

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { WalletProvider } from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletConnectProvider } from "@/components/WalletConnectProvider";

import Navbar from './layouts/navbar';
import PresalcPart from "./pages/presalePart"
import Claim from './pages/claim';
import ThemeContext from './context/themeContext';

import './App.css';
import SOL from "./assets/img/sol.svg"
import USDC from "./assets/img/usdc.svg"
import PRNT from "./assets/img/prnt.svg"
import JUP from "./assets/img/jup.svg"
import BONK from "./assets/img/bonk.svg"
import BOZO from "./assets/img/bozo.svg"
import BASC from "./assets/img/basc.svg"
import WIF from "./assets/img/wif.svg"
import WEN from "./assets/img/wen.png"
import Dive from './pages/dive';
import Price from './pages/price';
import Tokenomics from './pages/tokenomics';
import HowTo from './pages/howTo';
import Copyright from './pages/copyright';

function App() {

  const tokens = [
    { ft: "SOL", icon: SOL },
    { ft: "USDC", icon: USDC },
    { ft: "PRNT", icon: PRNT },
    { ft: "JUP", icon: JUP },
    { ft: "BONK", icon: BONK },
    { ft: "BOZO", icon: BOZO },
    { ft: "BASC", icon: BASC },
    { ft: "WIF", icon: WIF },
    { ft: "WEN", icon: WEN },
  ];
  return (
    <div className="App bg-slate-800">
      <ThemeContext.Provider value={tokens}>
        <Navbar></Navbar>
        <div className='px-5 md:px-10 lg:px-0 pt-6 md:pt-[100px] pb-[160px] flex flex-col gap-[160px]'>
          <PresalcPart></PresalcPart>
          <Claim></Claim>
          <Dive />
        </div>
        <Price />
        <div className='py-[142px] flex flex-col gap-[160px]'>
          <Tokenomics />
          <HowTo />
        </div>
        <Copyright />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
