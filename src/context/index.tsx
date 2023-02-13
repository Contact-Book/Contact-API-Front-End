import { createContext } from 'react';
import { IAppProvider, IProvider } from '../interfaces';

export const AppContext = createContext<IAppProvider>({} as IAppProvider);

const AppProvider = ({ children }: IProvider) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default AppProvider;
