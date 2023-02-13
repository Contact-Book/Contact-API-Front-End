import { UseFormRegister } from 'react-hook-form';
import { InputComponent } from './style';

export interface IInputProps {
  inputFor: string;
  placeExemplo?: string;
  description?: string;
  inputType?: string;
  object: string;
  register?: UseFormRegister<any>;
}

const Input = ({
  inputFor,
  placeExemplo,
  description,
  inputType,
  object,
  register,
}: IInputProps) => {
  return (
    <>
      <label htmlFor={inputFor}>{description}</label>
      <InputComponent
        placeholder={placeExemplo}
        type={inputType}
        {...register!(object!)}
      ></InputComponent>
    </>
  );
};

export default Input;
