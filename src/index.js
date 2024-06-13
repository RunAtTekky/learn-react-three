import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, theme } from "@chakra-ui/react";

export const server = "https://api.coingecko.com/api/v3";
export const Context = createContext({ currency: "inr" });

const AppWrapper = () => {
  const [currency, setCurrency] = useState("inr");

  return (
    <Context.Provider
      value={{
        currency,
        setCurrency,
      }}
    >
      <App />
    </Context.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AppWrapper />
    </ChakraProvider>
  </React.StrictMode>
);
