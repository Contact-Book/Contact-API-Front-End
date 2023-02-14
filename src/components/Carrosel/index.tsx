import 'bootstrap/dist/css/bootstrap.min.css';
import { IProvider } from '../../interfaces';
import { CarroselComponent } from './style';

const Carrosel = ({ children }: IProvider): JSX.Element => {
  return (
    <CarroselComponent>
      <ul className="contacts">{children}</ul>
    </CarroselComponent>
  );
};

export default Carrosel;
