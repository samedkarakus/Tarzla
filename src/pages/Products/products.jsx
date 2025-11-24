import React from 'react';
import Header from '../../components/header'
import SearchingArea from './components/searchingArea';
import ProductsDetails from '../../pages/Main Page/components/products'
import Footer from '../Footer/footer';

const Products = () => {
    return (
        <div>
            <Header/>
            <SearchingArea/>
            <ProductsDetails/>
            <Footer/>
        </div>
    );
}

export default Products;
