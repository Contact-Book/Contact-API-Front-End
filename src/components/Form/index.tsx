import Input from '../Input';
import { FormComponent } from './style';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = (): JSX.Element => {
  return (
    <FormComponent>
      <Input
        inputFor={'Email'}
        placeExemplo={'Email'}
        description={'Email'}
        inputType={'text'}
        // object={}
        // register={}
      ></Input>
      <Input
        inputFor={'Password'}
        placeExemplo={'Password'}
        description={'Password'}
        inputType={'text'}
        // object={}
        // register={}
      ></Input>
      <button>Sing in</button>
    </FormComponent>
  );
};

export default Form;
