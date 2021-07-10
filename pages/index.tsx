import { useEffect} from 'react';

import { connect, useDispatch } from 'react-redux'

import { ApplicationState } from '../store';

import Header from '../components/Layout/Header';

import BannerSlider from '../components/shop-style-five/BannerSlider';

import Facility from '../components/shop-style-five/Facility';

import CategoryTypes from '../components/shop-style-five/CategoryTypes';

import ProductsOffer from '../components/shop-style-five/ProductsOffer';

import Partner from '../components/Common/Partner';

import Subscribe from '../components/Common/Subscribe';

import InstagramPhoto from '../components/Common/InstagramPhoto';

import Footer from '../components/Layout/Footer';

import AddsModal from '../components/Modal/AddsModal';

import Products from '../components/shop-style-five/Products';

import { Products as ProductsPros } from '../store/ducks/products/types';

import { loadResquestProduct } from '../store/ducks/products/actions';

import Head from 'next/head';

interface StateProps {
  productss: ProductsPros[]
}

type Props = StateProps ;

const Index = ({productss}: Props) => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loadResquestProduct())
  },[])

  return (
    <>
    <Head>
      <title> Ilooks | Home </title>
    </Head>
    <Header /> 
    
    <BannerSlider /> 
    
    <Facility /> 
    
    <CategoryTypes />
    
    <Products products={productss} /> 
    
    <ProductsOffer />    
    
    <Partner />
    
    <Subscribe />
    
    <InstagramPhoto />
    
    <Footer />
    
    <AddsModal />

    </>
    );
  }
  
  const mapStateToProps = (state: ApplicationState ) => ({
    productss: state.products.data
  });

  export default connect(mapStateToProps)(Index);