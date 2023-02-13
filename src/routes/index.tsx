import { Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/Landing';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';

const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default RouterMain;
