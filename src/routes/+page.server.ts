import type { PageServerLoad } from './$types';

const getUser = async () => {
	return 'user';
};

const getTransactions = async () => {
	// Implementation for getTransactions
	return 'kdkkdkdk';
};

const getWallets = async () => {
	// Implementation for getWallets
	return 'asdfadsf';
};

export const load: PageServerLoad = async () => {
	const [user, transactions, wallets] = await Promise.all([
		getUser(),
		getTransactions(),
		getWallets()
	]);

	return {
		user,
		transactions,
		wallets
	};
};
