import { FormComponent } from './style';

import { IProvider } from '../../interfaces';
import { useContext } from 'react';
import { AppContext } from '../../context';

export interface ISubmitData {
  email: string;
  password: string;
}

const Form = ({ children }: IProvider): JSX.Element => {
  const { handleSubmit } = useContext(AppContext);

  const onSubmit = async (data: ISubmitData) => {
    //MAKE THE REQUEST
    console.log(data);
  };

  return (
    <FormComponent onSubmit={handleSubmit(onSubmit)}>{children}</FormComponent>
  );
};

export default Form;
