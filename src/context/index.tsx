import { createContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ISubmitData } from '../components/Form';
import { IAppProvider, IProvider } from '../interfaces';

export const AppContext = createContext<IAppProvider>({} as IAppProvider);

const AppProvider = ({ children }: IProvider) => {
  const { register, handleSubmit } = useForm<ISubmitData>({});

  const [scale, setScale] = useState(1.05);
  const [cardState, setCardState] = useState('');
  const [active, setActive] = useState(false);
  const [show, toggleShow] = useState(false);
  const [edit, setEdit] = useState(false);

  const changeScale = (event: any) => {
    setScale(1.7);
    setCardState(event.target.id);
    setActive(true);
  };
  const changeScaleOut = () => {
    setScale(1.05);
    setCardState('');
    setActive(false);
  };

  useEffect(() => {
    setActive(false);
  }, []);

  const handleEdit = (event: any) => {
    toggleShow(true);
    setEdit(true);
  };

  const handleRemove = (event: any) => {
    toggleShow(true);
    setEdit(false);
  };

  const handleClose = () => {
    toggleShow(false);
  };

  const handleDelete = (event: any) => {
    const tagLi = event.target.closest('li').id;
    console.log(tagLi);
    toggleShow(false);
  };

  return (
    <AppContext.Provider
      value={{
        register,
        handleSubmit,
        cardState,
        setScale,
        setCardState,
        changeScale,
        changeScaleOut,
        scale,
        setActive,
        active,
        handleEdit,
        handleRemove,
        toggleShow,
        show,
        edit,
        setEdit,
        handleClose,
        handleDelete,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
