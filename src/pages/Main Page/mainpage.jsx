import React from 'react';
import Header from '../../components/header';
import Launch from './components/launch';
import Products from './components/productsGrid';
import Footer from '../Footer/footer';

const MainPage = ({ onSearch }) => {
  return (
    <div>
      <Header onSearch={onSearch} />
      <Launch onSearch={onSearch} />
      <Products />
      <Footer />
    </div>
  );
};

export default MainPage;