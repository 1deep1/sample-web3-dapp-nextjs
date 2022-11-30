import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

const RPC_URLS = {
	1: 'https://mainnet.infura.io/v3/bb01a25b73e14e21b087057b1b9c648f',
	4: 'https://rinkeby.infura.io/v3/bb01a25b73e14e21b087057b1b9c648f'
};

//metamask
export const injected = new InjectedConnector({
	supportedChainIds: [ 1, 3, 4, 5, 42 ]
});


export const walletconnect = new WalletConnectConnector({
	rpc: {
		1: RPC_URLS[1],
		4: RPC_URLS[4]
	},
	qrcode: true,
	pollingInterval: 15000
});


export function resetWalletConnector(connector) {
	if (connector && connector instanceof WalletConnectConnector) {
		connector.walletConnectProvider = undefined;
	}
}

//coinbase
export const walletlink = new WalletLinkConnector({
	url: RPC_URLS[1],
	appName: 'nft',
	supportedChainIds: [1, 3, 4, 5, 42]
});