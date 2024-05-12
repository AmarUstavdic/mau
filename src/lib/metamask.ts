import { writable, type Writable } from 'svelte/store';

interface EthereumProvider {
	request: (args: any) => Promise<string[]>;
}

let provider: EthereumProvider | null = null;
const addressList: Writable<string[]> = writable<string[]>([]);

const initialize = () => {
	if (window.ethereum && window.ethereum.isMetaMask) {
		provider = window.ethereum;
	}
};

const connect = async () => {
	try {
		if (!provider) {
			throw new Error('MetaMask provider not available.');
		}

		const accounts = await provider.request({ method: 'eth_requestAccounts' });
		addressList.set(accounts);
	} catch (error) {
		console.error('Error connecting:', error);
		throw error;
	}
};

const disconnect = async () => {
	try {
		if (!provider) {
			throw new Error('MetaMask provider not available.');
		}

		await provider.request({
			method: 'wallet_revokePermissions',
			params: [
				{
					eth_accounts: {}
				}
			]
		});

		addressList.set([]);
	} catch (error) {
		console.error('Error disconnecting:', error);
		throw error;
	}
};

export { provider, addressList, initialize, connect, disconnect };
