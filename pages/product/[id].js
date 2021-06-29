import React from 'react';
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Footer from '../../components/Layout/Footer';
import ProductImage from '../../components/product-details/ProductImage';
import ProductContent from '../../components/product-details/ProductContent';
import DetailsTab from '../../components/product-details/DetailsTab';
import RelatedProducts from '../../components/product-details/RelatedProducts';
import Facility from '../../components/shop-style-five/Facility';
import NavbarTwo from '../../components/Layout/NavbarTwo';

const Product = () => {
    const router = useRouter()
    const { id } = router.query
    const product = useSelector((state) => state.products.find(item => item.id === parseInt(id)))

    const products = useSelector((state) => state.products)
    const addedItemsToCompare = useSelector((state) => state.addedItemsToCompare)
    return (
        <>
            <NavbarTwo />             

            <section className="products-details-area pt-60">
                <div className="container">
                    <div className="row">
                        
                        <ProductImage />

                        <ProductContent product={product} />

                        <DetailsTab />

                    </div>
                </div>

                <RelatedProducts products={products} CompareProducts={addedItemsToCompare} />

                <Facility />
            </section>

            <Footer />
        </>
    );
}

export default Product