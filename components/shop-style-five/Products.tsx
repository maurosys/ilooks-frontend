import React, {useState}          from 'react';
import Link                       from 'next/link';
import QuickView                  from '../Modal/QuickView';
import dynamic                    from 'next/dynamic';
import AddToCart                  from '../Shared/AddToCart';
import {useEffect}                from 'react';

const OwlCarousel = dynamic(import('react-owl-carousel3'));
import {Products as ProductsPros} from '../../store/ducks/products/types';
import {connect, useDispatch}     from 'react-redux';
import {addToWishlist}            from '../../store/ducks/WishList/action';
import {Wishlist}                 from '../../store/ducks/WishList/types';
import {BsHeartFill}              from 'react-icons/bs';

import {formatToUggly} from '@utils/formatToUggly';

const options = {
	loop:               false,
	rewind:             true,
	center:             true,
	nav:                false,
	dots:               false,
	margin:             30,
	smartSpeed:         750,
	autoplay:           true,
	autoplayHoverPause: true,
	startPosition:      5,
	navText:            [
		'<i class=\'fas fa-chevron-left\'></i>',
		'<i class=\'fas fa-chevron-right\'></i>',
	],
	responsive:         {
		0:    {
			items: 1,
		},
		380:  {
			items: 2,
		},
		576:  {
			items: 2,
		},
		768:  {
			items: 2,
		},
		1024: {
			items: 3,
		},
		1200: {
			items: 4,
		},
	},
};

const handleActive = (data) => {
	if (data.active) {
		return (data.active = false);
	}
};

interface StateProps {
	products: ProductsPros[];
	wishlist?: Wishlist[];
}

const Products = ({products, wishlist}: StateProps) => {
	const dispatch = useDispatch();
	const [modalOpen, setModalOpen] = useState(false);
	const [modalData, setModalData] = useState(null);
	const [display, setDisplay] = useState(false);

	const openTabSection = (evt, tabNmae) => {
		let i, tabcontent, tablinks;
		tabcontent = document.getElementsByClassName('tabs_item');
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].classList.remove('fadeInUp');
			tabcontent[i].style.display = 'none';
		}

		tablinks = document.getElementsByTagName('li');
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace('current', '');
		}

		document.getElementById(tabNmae).style.display = 'block';
		document.getElementById(tabNmae).className += ' fadeInUp animated';
		evt.currentTarget.className += 'current';
	};

	useEffect(() => {
		setDisplay(true);
	}, []);

	const openModal = () => {
		return setModalOpen(true);
	};

	const closeModal = () => {
		return setModalOpen(false);
	};

	return (
		<section className="all-products-area pb-60">
			<div className="container">
				<div className="tab products-category-tab">
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<ul className="tabs">
								<li
									onClick={(e) => {
										e.preventDefault();
										openTabSection(e, 'tab1');
									}}
									className="current"
								>
                  <span className="tabs-nav-text">
                    <span className="dot"></span> Produtos em detaque
                  </span>
								</li>

								{/* <li
								 onClick={(e) => {
								 e.preventDefault();
								 openTabSection(e, "tab2");
								 }}
								 >
								 <span className="tabs-nav-text">
								 <span className="dot"></span> Últimos produtos
								 </span>
								 </li> */}
							</ul>
						</div>

						<div className="col-lg-12 col-md-12">
							<div className="tab_content">
								<div id="tab1" className="tabs_item">
									<div className="row">
										{display ? (
											<OwlCarousel {...options}>
												{products?.map((data, idx) => {
													const wishlistId = wishlist.filter((item: Wishlist) => item.id === data.id);
													return (
														<div className="col-lg-12 col-md-12" key={idx}>
															<div className="single-product-box">
																<div className="product-image">
																	<Link
																		href="/product/[id]"
																		as={`/product/${formatToUggly({
																			                              name: data.title,
																			                              id:   data.id,
																		                              })}`}
																	>
																		<a onClick={(e) => {
																			sessionStorage.setItem('@ilooksecommerce', location.href);
																		}}>
																			<img src={data.image} alt="image"/>
																			<img src={data.imageHover} alt="image"/>
																		</a>
																	</Link>
																	<ul>
																		<li
																			style={{
																				cursor: 'pointer',
																			}}
																			onClick={() => {
																				// e.preventDefault();
																				setModalData(data);
																				openModal();
																			}}
																		>
																			<a
																				data-tip="Quick View"
																				data-place="left"
																			>
																				<i className="far fa-eye"></i>
																			</a>
																		</li>
																		<li
																			onClick={() => {
																				dispatch(
																					addToWishlist({
																						              ...data,
																						              active: true,
																					              })
																				);
																			}}
																		>
																			<Link href="#">
																				<a
																					data-tip="Add to Wishlist"
																					data-place="left"
																				>
																					<i className="far">
																						{wishlistId[0]?.active ? (
																							<BsHeartFill color="red"/>
																						) : (
																							 <BsHeartFill/>
																						 )}
																					</i>
																				</a>
																			</Link>
																		</li>
																	</ul>
																</div>

																<div className="product-content">
																	<h3>
																		<Link
																			href="/product/[id]"
																			as={`/product/${formatToUggly({
																				                              name: data.title,
																				                              id:   data.id,
																			                              })}`}
																		>
																			<a onClick={(e) => {
																				sessionStorage.setItem('@ilooksecommerce', location.href);
																			}} style={{textOverflow: "ellipsis",overflow: "hidden",whiteSpace: "nowrap"}}>{data.title}</a>
																		</Link>
																	</h3>

																	<div className="product-price">
																		{data.outletPrice > 0
																		 ? <>
																			 <span>de&nbsp;</span>
																			 <span className="new-price" style={{textDecoration: 'line-through'}}>{new Intl.NumberFormat('br-BR', {style: 'currency', currency: 'BRL',}).format(data?.price)}</span>
																			 <span>&nbsp;por&nbsp;</span>
																			 <span className="new-price">{new Intl.NumberFormat('br-BR', {style: 'currency', currency: 'BRL',}).format(data.outletPrice)}</span>
																		 </>
																		 : <span className="new-price">{new Intl.NumberFormat('br-BR', {style: 'currency', currency: 'BRL',}).format(data?.price)}</span>
																		}

																	</div>

																	<div>
																		<Link
																			href="/product/[id]"
																			as={`/product/${formatToUggly({
																				                              name: data.title,
																				                              id:   data.id,
																			                              })}`}
																		>
																			<a
																				className="btn btn-light"
																				onClick={(e) => {
																					sessionStorage.setItem('@ilooksecommerce', location.href);
																				}}
																			>
																				Visualizar detalhes
																			</a>
																		</Link>
																	</div>
																	{/* <AddToCart data={data} /> */}
																</div>
															</div>
														</div>
													);
												})}
											</OwlCarousel>
										) : (
											 ''
										 )}
									</div>
								</div>

								<div id="tab2" className="tabs_item">
									{/*<div className="row">*/}
									{/*	{display ? (*/}
									{/*		<OwlCarousel {...options}>*/}
									{/*			{products.map((data, idx) => {*/}
									{/*				const wishlistId = wishlist.filter(*/}
									{/*					(item: Wishlist) => item.id === data.id*/}
									{/*				);*/}
									{/*				return (*/}
									{/*					<div className="col-lg-12 col-md-12" key={idx}>*/}
									{/*						<div className="single-product-box">*/}
									{/*							<div className="product-image">*/}
									{/*								<Link*/}
									{/*									href="/product/[id]"*/}
									{/*									as={`/product/${data.id}`}*/}
									{/*								>*/}
									{/*									<a onClick={(e) => {*/}
									{/*										sessionStorage.setItem('@ilooksecommerce',location.href);*/}
									{/*									}}>*/}
									{/*										<img src={data.image} alt="image"/>*/}
									{/*										<img src={data.imageHover} alt="image"/>*/}
									{/*									</a>*/}
									{/*								</Link>*/}

									{/*								<ul>*/}
									{/*									<li*/}
									{/*										style={{*/}
									{/*											cursor: 'pointer',*/}
									{/*										}}*/}
									{/*										onClick={() => {*/}
									{/*											// e.preventDefault();*/}
									{/*											setModalData(data);*/}
									{/*											openModal();*/}
									{/*										}}*/}
									{/*									>*/}
									{/*										<a*/}
									{/*											data-tip="Quick View"*/}
									{/*											data-place="left"*/}
									{/*										>*/}
									{/*											<i className="far fa-eye"></i>*/}
									{/*										</a>*/}
									{/*									</li>*/}
									{/*									<li*/}
									{/*										onClick={() => {*/}
									{/*											dispatch(*/}
									{/*												addToWishlist({*/}
									{/*													              ...data,*/}
									{/*													              active: true,*/}
									{/*												              })*/}
									{/*											);*/}
									{/*										}}*/}
									{/*									>*/}
									{/*										<Link href="#">*/}
									{/*											<a*/}
									{/*												data-tip="Add to Wishlist"*/}
									{/*												data-place="left"*/}
									{/*											>*/}
									{/*												<i className="far">*/}
									{/*													{wishlistId[0]?.active ? (*/}
									{/*														<BsHeartFill color="red"/>*/}
									{/*													) : (*/}
									{/*														 <BsHeartFill/>*/}
									{/*													 )}*/}
									{/*												</i>*/}
									{/*											</a>*/}
									{/*										</Link>*/}
									{/*									</li>*/}
									{/*								</ul>*/}
									{/*							</div>*/}

									{/*							<div className="product-content">*/}
									{/*								<h3>*/}
									{/*									<Link*/}
									{/*										href="/product/[id]"*/}
									{/*										as={`/product/${data.id}`}*/}
									{/*									>*/}
									{/*										<a onClick={(e) => {*/}
									{/*											sessionStorage.setItem('@ilooksecommerce',location.href);*/}
									{/*										}}>{data.title}</a>*/}
									{/*									</Link>*/}
									{/*								</h3>*/}

									{/*								<div className="product-price">*/}
									{/*									{data.outletPrice > 0*/}
									{/*									 ? <>*/}
									{/*										 <span>de&nbsp;</span>*/}
									{/*										 <span className="new-price" style={{textDecoration: 'line-through'}}>{new Intl.NumberFormat('br-BR', {style: 'currency', currency: 'BRL',}).format(data?.price)}</span>*/}
									{/*										 <span>&nbsp;por&nbsp;</span>*/}
									{/*										 <span className="new-price">{new Intl.NumberFormat('br-BR', {style: 'currency', currency: 'BRL',}).format(data.outletPrice)}</span>*/}
									{/*									 </>*/}
									{/*									 : <span className="new-price">{new Intl.NumberFormat('br-BR', {style: 'currency', currency: 'BRL',}).format(data?.price)}</span>*/}
									{/*									}*/}
									{/*								</div>*/}

									{/*								 <AddToCart data={data} /> */}
									{/*							</div>*/}
									{/*						</div>*/}
									{/*					</div>*/}
									{/*				);*/}
									{/*			})}*/}
									{/*		</OwlCarousel>*/}
									{/*	) : (*/}
									{/*		 ''*/}
									{/*	 )}*/}
									{/*</div>*/}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{modalOpen ? (
				<QuickView closeModal={closeModal} modalData={modalData}/>
			) : (
				 ''
			 )}
		</section>
	);
};

const mapStateToProps = (state) => {
	return {
		wishlist: state.wishlist,
	};
};

export default connect(mapStateToProps)(Products);
