import { RegisterComponent } from './style';
import Input from '../../components/Input';
import { AppContext } from '../../context';
import { useContext } from 'react';
import Form from '../../components/Form';
import Link from '../../components/Link';

const RegisterPage = (): JSX.Element => {
  const { register } = useContext(AppContext);
  return (
    <RegisterComponent bgUrl="/logo.jpeg">
      <span className="page title">Register</span>
      <Form>
        <Input
          inputFor={'Name'}
          placeExemplo={'Name'}
          description={'Name'}
          inputType={'text'}
          object={'name'}
          register={register}
        ></Input>
        <Input
          inputFor={'Email'}
          placeExemplo={'Email'}
          description={'Email'}
          inputType={'text'}
          object={'email'}
          register={register}
        ></Input>
        <Input
          inputFor={'Password'}
          placeExemplo={'Password'}
          description={'Password'}
          inputType={'text'}
          object={'password'}
          register={register}
        ></Input>
        <Input
          inputFor={'Phone Number'}
          placeExemplo={'+xx (xx) xxxx-xxxx'}
          description={'Phone Number'}
          inputType={'text'}
          object={'phoneNumber'}
          register={register}
        ></Input>
        <button className="link" type="submit">{`${'Register'} ${'>'}`}</button>
        <Link
          className="handleChangePage"
          content="Click To Sing In"
          to="/login"
        ></Link>
      </Form>
    </RegisterComponent>
  );
};

export default RegisterPage;
