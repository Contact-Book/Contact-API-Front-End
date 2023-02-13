import Form from '../../components/Form';
import Input from '../../components/Input';
import { LoginComponent } from './style';
import Link from '../../components/Link';
import { useContext } from 'react';
import { AppContext } from '../../context';

const LoginPage = (): JSX.Element => {
  const { register } = useContext(AppContext);
  return (
    <LoginComponent bgUrl="/logo.jpeg">
      <span className="page title">Login</span>
      <Form>
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
          register={register}
          object="password"
        ></Input>
        <button className="link" type="submit">{`${'Sing In'} ${'>'}`}</button>
        <Link
          className="handleChangePage"
          content="Click To Register"
          to="/register"
        ></Link>
      </Form>
    </LoginComponent>
  );
};

export default LoginPage;
