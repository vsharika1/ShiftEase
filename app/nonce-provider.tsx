import { createContext, useContext } from 'react';

const NonceContext = createContext<string | undefined>(undefined);
export const NonceProvider = NonceContext.Provider;
// eslint-disable-next-line react-refresh/only-export-components
export const useNonce = () => useContext(NonceContext);
