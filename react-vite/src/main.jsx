import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Connect } from "@stacks/connect-react";
import { userSession } from "./components/clarity/ConnectWallet";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Connect
      authOptions={{
        appDetails: {
          name: "Stacks React Template",
          // todo:
          icon: window.location.origin + "/logo.png",
        },
        redirectTo: "/",
        onFinish: () => {
          window.location.reload();
        },
        userSession,
      }}
    >
      <App />
    </Connect>
  </React.StrictMode>
);
