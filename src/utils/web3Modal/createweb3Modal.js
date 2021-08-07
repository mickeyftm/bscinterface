import Web3Modal from "web3modal";
import { providerOptions } from "../../utils/web3Modal/getNetworks";

export const createweb3Modal = new Web3Modal({
  network: "binance", // optional or "binance"
  cacheProvider: false, // optional
  providerOptions, // required
  disableInjectedProvider: false,
  theme: {
    background: "var(--c-background)",
    main: "var(--c-primary)",
    secondary: "var(--c-secondary)",
    border: "#380033a8",
    hover: "#ff0a9c78"
  }
  //providerOptions // required
});
