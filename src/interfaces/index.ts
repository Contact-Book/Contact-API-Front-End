import { ReactNode } from 'react';
import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { ISubmitData } from '../components/Form';

export interface IAppProvider {
  register: UseFormRegister<ISubmitData>;
  handleSubmit: UseFormHandleSubmit<ISubmitData>;
  setCardState: React.Dispatch<React.SetStateAction<string>>;
  cardState: string;
  changeScale: (event: any) => void;
  changeScaleOut: () => void;
  setScale: React.Dispatch<React.SetStateAction<number>>;
  scale: number;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  active: boolean;
  handleEdit: (event: any) => void;
  handleRemove: (event: any) => void;
  toggleShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
  handleClose: () => void;
  handleDelete: (event: any) => void;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  edit: boolean;
}

export interface IProvider {
  children: ReactNode;
  id?: string;
}
