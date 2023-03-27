import React from "react";
import { AppConfig, showConnect, UserSession } from "@stacks/connect";
import { styles } from "../../styles";

const appConfig = new AppConfig(["store_write", "publish_data"]);
export const userSession = new UserSession({ appConfig });

function authenticate() {
  showConnect({
    appDetails: {
      name: "Stacks React Starter",
      icon: window.location.origin + "/logo512.png",
    },
    redirectTo: "/",
    onFinish: () => {
      window.location.reload();
    },
    userSession,
  });
}

function disconnect() {
  userSession.signUserOut("/");
}

const ConnectWallet = () => {
  if (userSession.isUserSignedIn()) {
    return (
      <div>
        <button className={styles.btn} onClick={disconnect}>
          Disconnect Hiro Wallet
        </button>
        <p>mainnet: {userSession.loadUserData().profile.stxAddress.mainnet}</p>
        <p>testnet: {userSession.loadUserData().profile.stxAddress.testnet}</p>

      </div>
    );
  }

  return (
    <button className={styles.btn} onClick={authenticate}>
      Connect Hiro Wallet
    </button>
  );
};

export default ConnectWallet;
