import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderComponent } from './style';
import { MdOutlineExitToApp } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Header = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <HeaderComponent>
      <span className="web title">CBook</span>
      <div className="profile">
        <span className="userName">Daniel Marques</span>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKS8LHk5FZbfkH3gYuJHrHBzjYp3siI_0sKA&usqp=CAU"
          alt="user-profile"
        />
        <MdOutlineExitToApp
          className="exit"
          onClick={() => navigate('/login')}
        />
      </div>
    </HeaderComponent>
  );
};

export default Header;
