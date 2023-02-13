import { createContext } from 'react';
import { useForm } from 'react-hook-form';
import { ISubmitData } from '../components/Form';
import { IAppProvider, IProvider } from '../interfaces';

export const AppContext = createContext<IAppProvider>({} as IAppProvider);

const AppProvider = ({ children }: IProvider) => {
  const { register, handleSubmit } = useForm<ISubmitData>({});

  return (
    <AppContext.Provider value={{ register, handleSubmit }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
