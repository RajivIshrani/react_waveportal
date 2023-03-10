import React from "react";
import classNames from "classnames";

export default function Wallet({
	loading,
	walletInstalled,
	walletConnected,
	networkName,
	isGoerli,
	connectWallet,
}) {
	if (loading) {
		return <div className="buttonGroup" />;
	}

	return (
		<div className="buttonGroup justifyCenter fading">
			{!walletInstalled && (
				<a
					className="button buttonNoWallet"
					href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn/related"
					target="_blank"
					rel="noopener noreferrer"
				>
					Install MetaMask
				</a>
			)}
			{walletInstalled && !walletConnected && (
				<button className="button buttonMetaMask" onClick={connectWallet}>
					Connect MetaMask
				</button>
			)}
			{walletConnected && (
				<div>
					<div>
						<span className="dotConnected" />
						Wallet Connected
					</div>
					<div
						className={classNames(
							"network",
							isGoerli ? "networkValid" : "networkInvalid",
						)}
					>
						Network: <span className="networkName">{networkName}</span>
					</div>
					{!isGoerli && (
						<div className="network networkInvalid">
							Please switch to Goerli
						</div>
					)}
				</div>
			)}
		</div>
	);
}
