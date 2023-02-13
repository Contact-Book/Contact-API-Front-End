import Link from '../../components/Link';
import { LandingComponent } from './style';

const LandingPage = (): JSX.Element => {
  return (
    <LandingComponent bgUrl="/logo.jpeg">
      <Link
        className="link"
        content={`${'Start now'} ${'>'}`}
        to="/login"
      ></Link>
      <span className="subtitle">Contact management app</span>
    </LandingComponent>
  );
};

export default LandingPage;
