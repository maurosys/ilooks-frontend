import React, {Component, useState} from 'react';
import Link                         from 'next/link';
import QuickView                    from '../Modal/QuickView';
import AddToCart                    from '../Shared/AddToCart';
import {Products as ProductsPros}   from '../../store/ducks/products/types';
import {formatToUggly}              from '@utils/formatToUggly';

interface StateProps {
	products: ProductsPros[];
}

const ProductsCard = ({products}: StateProps) => {
	console.log(products);
	const [modalOpen, setModalOpen] = useState(false);
	const [modalData, setModalData] = useState(null);

	const openModal = () => {
		return setModalOpen(true);
	};

	const closeModal = () => {
		return setModalOpen(false);
	};

	const handleModalData = (data) => {
		return setModalData(data);
	};

	return (
		<>
			{products.map((data, idx) => (
				<div
					className="col-lg-4 col-sm-6 col-md-4 col-6 products-col-item"
					key={idx}
				>
					<div className="single-product-box">
						<div className="product-image">
							<Link href={`/produtos/${data.category?.slugy}/${data.subCategory?.slugy}/${data.slugy}`}>
								<a onClick={(e) => {
									sessionStorage.setItem('@ilooksecommerce',location.href);
								}}>
									<img src={data.image} alt="image"/>
									<img src={data.imageHover} alt="image"/>
								</a>
							</Link>

							<ul>
								<li>
									<Link href="#">
										<a
											data-tip="Quick View"
											data-place="left"
											onClick={(e) => {
												e.preventDefault();
												openModal();
												handleModalData(data);
											}}
										>
											<i className="far fa-eye"></i>
										</a>
									</Link>
								</li>
							</ul>
						</div>

						<div className="product-content">
							<h3>
								<Link href={`/produtos/${data.category?.slugy}/${data.subCategory?.slugy}/${data.slugy}`}>
									<a onClick={(e) => {
										sessionStorage.setItem('@ilooksecommerce',location.href);
									}} style={{textOverflow: "ellipsis",overflow: "hidden",whiteSpace: "nowrap"}}>{data.title}</a>
								</Link>
							</h3>

							<div className="price">
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
								<Link href={`/produtos/${data.category?.slugy}/${data.subCategory?.slugy}/${data.slugy}`}>
									<a className="btn btn-light" onClick={(e) => {
										sessionStorage.setItem('@ilooksecommerce',location.href);
									}}>
										Visualizar detalhes
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			))}
			{modalOpen ? (
				<QuickView closeModal={closeModal} modalData={modalData}/>
			) : (
				 ''
			 )}
		</>
	);
};

export default ProductsCard;
