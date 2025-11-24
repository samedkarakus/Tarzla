import React from 'react';
import Header from '../../components/header';
import Launch from './components/launch';
import Products from './components/products'
import Footer from '../Footer/footer';

const MainPage = () => {
  return (
    <div>
      <Header/>
      <Launch/>
      <Products/>
      <Footer/>
    </div>
  );
};

export default MainPage;