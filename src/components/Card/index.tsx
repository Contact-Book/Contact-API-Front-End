import { useContext } from 'react';
import { AppContext } from '../../context';
import { IProvider } from '../../interfaces';
import { CardComponent } from './style';

export interface ISubmitData {
  email: string;
  password: string;
}

const Card = ({ children, id }: IProvider): JSX.Element => {
  const { scale, changeScale, changeScaleOut, active } = useContext(AppContext);

  return (
    <CardComponent
      id={id}
      scale={scale}
      onClick={changeScale}
      onMouseOut={changeScaleOut}
      active={active}
    >
      {children}
    </CardComponent>
  );
};

export default Card;
