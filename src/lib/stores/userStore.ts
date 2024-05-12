import { writable, type Readable } from "svelte/store";

// Define the user data interface
interface userData {
  logged_in: boolean;
  address: string | undefined;
  balance: string | undefined;
}

// Define the store interface
interface userStore extends Readable<userData> {
  login: (data: { address: string; balance: string }) => void;
  logout: () => void;
}

// Function to create the user store
function createUserStore(): userStore {
  const initialState: userData = {
    logged_in: false,
    address: undefined,
    balance: undefined,
  };

  const { subscribe, set } = writable(initialState);

  return {
    subscribe,
    login: (data) => {
      set({
        logged_in: true,
        address: data.address,
        balance: data.balance,
      });
    },
    logout: () => {
      set(initialState);
    },
  };
}

export const user = createUserStore();
