//SERVICE
import api                                   from '@services/api';
import {CategoryRequest, SubCategoryRequest} from '@type/request';
import {GetStaticProps}                      from 'next';
import React, {useEffect, useState}          from 'react';
import {useDispatch}                         from 'react-redux';
import InstagramPhoto                        from '../components/Common/InstagramPhoto';
import Partner                               from '../components/Common/Partner';
import Footer                                from '../components/Layout/Footer';
import Header                                from '../components/Layout/Header';
import BannerSlider                          from '../components/shop-style-five/BannerSlider';
import Facility                              from '../components/shop-style-five/Facility';
import Products                              from '../components/shop-style-five/Products';
import {Products as ProductsPros}            from '../store/ducks/products/types';

//TYPES
interface StateProps {
	productss: ProductsPros[];
	categories: CategoryRequest[];
	subCategories: SubCategoryRequest[];
}

type Props = StateProps;

const LojaIndex = ({productss, categories, subCategories}: Props) => {
	const dispatch = useDispatch();
	const [products, setProducts] = useState([]);
	const [subscription, setSubscription] = useState(false);
	const [banner, setBanner] = useState<any>();

	useEffect(() => {
		if (process.env.NEXT_PUBLIC_AMBIENTE === 'PRODUCAO') {
			if (window.location.protocol !== 'https:' || window.location.hostname.indexOf('ilooks.com.br') < 0) {
				window.location.href = 'https://www.ilooks.com.br';
			}
		}

		loadProducts();
		loadBanners();
		const subs = localStorage.getItem('@ilooksecommerce_subscription');
		if (subs) {
			setSubscription(true);
		}
	}, []);

	const loadBanners = async () => {
		api.get('system/banners').then((resp: any) => {
			if (resp.data) {
				setBanner(resp.data.find((banner: any) => banner.type == 'meio'));
			}
		}).catch((error: any) => {
			console.log(error);
		});
	}

	const loadProducts = async () => {
		api
			.get('/product/featured')
			.then((response) => {
				const _products: ProductsPros[] = response.data.map((prod) => {
					let imageUrl = '';

					if (
						prod.details_product &&
						prod.details_product.length > 0 &&
						prod.details_product[0].photos.length > 0
					) {
						imageUrl = prod.details_product[0].photos[0];
					}

					return {
						id:              prod.id,
						slugy:           prod.slugy,
						category:        prod.category,
						subCategory:     prod.subCategory,
						title:           prod.name,
						price:           prod.price,
						outletPrice:     prod.outletPrice,
						image:           imageUrl,
						imageHover:      imageUrl,
						qty:             prod.quantity_all,
						provider:        prod.provider.name,
						providerId:      prod.provider.id,
						materialType:    prod.materialType,
						details_product: prod.details_product,
						total:           0,
						active:          true,
					};
				});
				setProducts(_products);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<Header categories={categories} subCategories={subCategories}/>

			<BannerSlider/>

			<Facility/>

			{/*<CategoryTypes/>*/}

			<Products products={products}/>

			{/*<ProductsOffer/>*/}
			<div style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
				<img style={{height: 850}} src={banner?.value}/>
			</div>

			<Partner/>

			{/*<Subscribe/>*/}

			<InstagramPhoto/>

			<Footer/>

			{/*			{!subscription &&
			 <AddsModal/>
			}*/}
		</>
	);
};

export const getStaticProps: GetStaticProps = async (context) => {
	// const api = getAPIClient(context);
	// const categories = await api.get("category");
	// const subCategories = await api.get("subcategory");

	return {
		props:      {},
		revalidate: 10,
	};
};

// // const mapStateToProps = (state: ApplicationState) => ({
// //   productss: state.products.data,
// // });

// export default connect(mapStateToProps)(Index);

export default LojaIndex;
