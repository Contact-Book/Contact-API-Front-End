import { Route, Routes } from 'react-router-dom';

const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>test</h1>} />
    </Routes>
  );
};

export default RouterMain;
