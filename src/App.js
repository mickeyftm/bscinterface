import React, { useState, useEffect, useCallback } from "react";
import Nav from "./UIMain/Nav/nav.jsx";
import Background from "./UIMain/body/background";
import Farms from "./UIMain/body/farms";
import Footer from "./UIMain/Footer";
import { createweb3Modal } from "./utils/web3Modal/createweb3Modal";
import { useConnectWallet, useDisconnectWallet } from "./utils/web3Modal/hooks";

export default function App() {
  const {
    connectWallet,
    web3,
    address,
    networkId,
    connected
  } = useConnectWallet();
  const { disconnectWallet } = useDisconnectWallet();
  const [web3Modal, setModal] = useState(null);

  useEffect(() => {
    setModal(createweb3Modal);
  }, [setModal]);

  useEffect(() => {
    if (web3Modal && (web3Modal.cachedProvider || window.ethereum)) {
      connectWallet(web3Modal);
    }
  }, [web3Modal, connectWallet]);

  const connectWalletCallback = useCallback(() => {
    connectWallet(web3Modal);
  }, [web3Modal, connectWallet]);

  const disconnectWalletCallback = useCallback(() => {
    disconnectWallet(web3, web3Modal);
  }, [web3, web3Modal, disconnectWallet]);

  return (
    <div className="App">
      <main className="app preload">
        <Nav
          address={address}
          connected={connected}
          connectWallet={connectWalletCallback}
          disconnectWallet={disconnectWalletCallback}
        />
        <Background />
        <Farms web3={web3} address={address} connected={connected} />
        <Footer />
      </main>
      {/* <ul>
          <li>
            {qbertprice}{" "}
            <button onClick={() => testprice()}>try test lol</button>
          </li>
        </ul>
*/}
    </div>
  );
}
