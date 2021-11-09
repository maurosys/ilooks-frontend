import React, {useState, useEffect} from 'react';
import {useRouter}                  from 'next/router';
import {connect, useDispatch}       from 'react-redux';
import Header                       from '@components/Layout/HeaderFixed';
import Footer                       from '@components/Layout/Footer';
import Facility                     from '@components/shop-style-five/Facility';
import LeftSidebar                  from '@components/Sidebar/LeftSidebar';
import ProductsFilterOptions        from '@components/Common/ProductsFilterOptions';
import ProductsCard                 from '@components/products/ProductsCard';
import {ApplicationState}           from '@store/index';
import {Products as ProductsPros}   from '@store/ducks/products/types';
import {loadResquestProduct}        from '@store/ducks/products/actions';
import {GetServerSideProps}         from 'next';
import {getAPIClient}               from '@services/api';

import ModalLoading from '@components/Modal/Loading';
import Pagination   from '@components/Pagination';

//TYPES
interface StateProps {
	products: ProductsPros[];
	commonProducts: ProductsPros[];
	totalProducts: number;
	totalPage: number;
}

// const hookClass = ({ products }: StateProps) => {
//   // const dispatch = useDispatch();
//   // useEffect(()=> {
//   //   dispatch(loadResquestProduct());
//   // },[])

//   return <Category {...products} products={products} />;
// };

const LimitForPage = 12;

const Products = ({
	                  products,
	                  commonProducts,
	                  totalProducts,
	                  totalPage,
                  }: StateProps) => {
	const [loadingGlobal, setLoadingGlobal] = useState(false);
	const [origemProducts, setOrigemProducts] = useState('');

	const router = useRouter();
	const {category, sub_category, provider, page, search} = router.query;

	const [gridClass, setGridClass] = useState('');

	const [currentPage, setCurrentPage] = useState(1); //pagina atual
	const [totalOfPages, setOfTotalPages] = useState(totalPage); //total de paginas
	const [productForPage, setProductForPage] = useState(LimitForPage); //items por paginas
	const [totalProductsLocated, setTotalProductsLocated] = useState(totalProducts); //total de produtos localizados

	const [productsView, setProductsView] = useState<ProductsPros[]>(products);
	const [commonProductsView, setCommonProductsView] = useState<ProductsPros[]>(commonProducts);

	const updateQueryProducts = async () => {
		const api = getAPIClient();
		setLoadingGlobal(true);
		try {
			let params: any = {};
			if (search) {
				params = {text: search, page: currentPage};
			} else {
				params = {
					limit:         productForPage,
					categoryId:    category,
					subCategoryId: sub_category,
					providerId:    provider,
					page:          currentPage,
					stock:         true
				};
			}

			const response = await api.get('/product', {params});

			setOfTotalPages(response.data.totalPage);
			setTotalProductsLocated(response.data.totalProducts);

			const productResponse = response.data.products.map((item) => ({
				id:              item.id,
				title:           item.name,
				price:           item.price,
				outletPrice:     item.outletPrice,
				image:           item.details_product[0].photos[0],
				imageHover:      item.details_product[0].photos[0],
				qty:             item.quantity_all,
				provider:        item.provider.name,
				providerId:      item.provider.id,
				materialType:    item.materialType,
				details_product: item.details_product,
				total:           item.quantity_all,
			}));

			const commonProductResponse = response.data.commonProdutcts.map(
				(item) => ({
					id:              item.id,
					title:           item.name,
					price:           item.price,
					outletPrice:     item.outletPrice,
					image:           item.details_product[0].photos[0],
					imageHover:      item.details_product[0].photos[0],
					qty:             item.quantity_all,
					provider:        item.provider.name,
					providerId:      item.provider.id,
					materialType:    item.materialType,
					details_product: item.details_product,
					total:           item.quantity_all,
				})
			);

			setProductsView([...productResponse]);
			setCommonProductsView([...commonProductResponse]);
			setLoadingGlobal(false);

			window.scroll(0, 0);
		} catch (error) {
			setLoadingGlobal(false);
		}
	};

	useEffect(() => {
		if (page) {
			setCurrentPage(Number(page));
		}
		updateQueryProducts();

		const categories = sessionStorage.getItem('@ilooksecommerce_categories');
		const subcategories = sessionStorage.getItem('@ilooksecommerce_subcategories');
		if (category && categories) {
			const ccategories = JSON.parse(categories);
			const ccate = ccategories.find((c) => c.id == category).name;
			setOrigemProducts(ccate);
		}
		if (sub_category && subcategories) {
			const ccategories = JSON.parse(categories);
			const csubcategories = JSON.parse(subcategories);
			const ccate = ccategories.find((c) => c.id == category).name;
			const csubcate = csubcategories.find((c) => c.id == sub_category).name;
			setOrigemProducts(`${ccate} / ${csubcate}`);
		}
		if (provider) {
			setOrigemProducts('Produtos');
		}
		if (!category && !sub_category && !provider) {
			setOrigemProducts('Todos os produtos');
		}
	}, [currentPage, totalOfPages, productForPage, sub_category]);

	function handleGrid(e) {
		setGridClass(e);
	}

	return (
		<>
			<Header/>

			{/* <LoadingOverlay active={true} spinner text="Loading your content...">
			 <p>Some content or children or something.</p>
			 </LoadingOverlay> */}
			<section className="products-collections-area ptb-60">
				<div className="container-fluid">
					<div className="section-title">
						<h2>
							<span className="dot"></span> {origemProducts}
						</h2>
					</div>

					<div className="row">
						<LeftSidebar col={3} commonProducts={commonProductsView}/>

						<div className="col-lg-9 col-md-12">
							<ProductsFilterOptions
								onClick={handleGrid}
								totalProductsLocated={totalProductsLocated}
								setTotalProductsLocated={setTotalProductsLocated}
								productForPage={productForPage}
								setProductForPage={setProductForPage}
								currentPage={currentPage}
								setCurrentPage={setCurrentPage}
							/>

							<div
								id="products-filter"
								className={`products-collections-listing row ${gridClass}`}
							>
								<ProductsCard products={productsView}/>
							</div>
							<hr/>
							<Pagination
								totalPages={totalOfPages}
								currentPage={currentPage}
								setCurrentPage={setCurrentPage}
							/>
						</div>
					</div>
				</div>
			</section>

			<Facility/>

			<Footer/>

			<ModalLoading loading={loadingGlobal}/>
		</>
	);
};

// const mapStateToProps = (state: ApplicationState) => ({
//   products: state.products.data,
// });

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const {category, sub_category, provider} = ctx.query;
	const apiClient = getAPIClient(ctx);
	let products = [];
	let commonProducts = [];
	let totalProducts = 0;
	let totalPage = 0;

	try {
		const response = await apiClient.get('/product', {
			params: {
				limit:         LimitForPage,
				categoryId:    category,
				subCategoryId: sub_category,
				providerId:    provider,
			},
		});

		totalProducts = response.data.totalProducts;
		totalPage = response.data.totalPage;

		products = response.data.products.map((item) => ({
			id:              item.id,
			title:           item.name,
			price:           item.price,
			outletPrice:     item.outletPrice,
			image:           item.details_product[0].photos[0],
			imageHover:      item.details_product[0].photos[0],
			qty:             item.quantity_all,
			provider:        item.provider.name,
			providerId:      item.provider.id,
			materialType:    item.materialType,
			details_product: item.details_product,
			total:           item.quantity_all,
		}));

		commonProducts = response.data.commonProdutcts.map((item) => ({
			id:              item.id,
			title:           item.name,
			price:           item.price,
			outletPrice:     item.outletPrice,
			image:           item.details_product[0].photos[0],
			imageHover:      item.details_product[0].photos[0],
			qty:             item.quantity_all,
			provider:        item.provider.name,
			providerId:      item.provider.id,
			materialType:    item.materialType,
			details_product: item.details_product,
			total:           item.quantity_all,
		}));

		// products = [...response.data.products];
	} catch (error) {
		console.log(error);
		return {
			redirect: {
				permanent:   false,
				destination: '/404',
			},
		};
	}

	return {
		props: {
			products,
			commonProducts,
			totalProducts,
			totalPage,
		},
	};
};

export default Products;
