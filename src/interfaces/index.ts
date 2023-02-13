import { ReactNode } from 'react';
import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { ISubmitData } from '../components/Form';

export interface IAppProvider {
  register: UseFormRegister<ISubmitData>;
  handleSubmit: UseFormHandleSubmit<ISubmitData>;
}

export interface IProvider {
  children: ReactNode;
}
