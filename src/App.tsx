import { Outlet } from 'react-router-dom';
import { Footer } from './comonents/Footer';
import { Header } from './comonents/Header';

import './App.scss';

export const App = () => {
  return (
    <div className="App">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};

export default App;
