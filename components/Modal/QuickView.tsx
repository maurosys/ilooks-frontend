import React, {useState, useEffect} from 'react';
import {connect, useDispatch}       from 'react-redux';
import Link                         from 'next/link';
import {ToastContainer, toast}      from 'react-toastify';
import {Products, ProductsDetails}  from '../../store/ducks/products/types';
import {addToCart, removeItem}      from '../../store/ducks/Card/actions';
import {card}                       from '../../store/ducks/Card/types';

import CircleColors from '@components/CircleColors';

interface QuickViewProps {
	modalData: Products;
	closeModal: (close) => void;
	card: card[];
}

const QuickView = ({closeModal, modalData, card}: QuickViewProps) => {
	const dispatch = useDispatch();
	const [qty, setQty] = useState(1);
	const [max, setMax] = useState(10);
	const [min, setMin] = useState(1);

	const [detailsProductAll, setDetailsProductAll] = useState<ProductsDetails[]>(
		[]
	);

	const [imageUrl, setImageUrl] = useState('');
	const [allColors, setAllColors] = useState<string[]>([]);
	const [colorSelect, setColorSelected] = useState<string>();

	const [allSizes, setAllSizes] = useState<any[]>([]);
	const [sizeSelected, setSiteSizeSelected] = useState('');

	useEffect(() => {
		setDetailsProductAll(modalData.details_product);

		const allColorsWithRep = modalData.details_product.map(
			(detail) => detail.color
		);
		var allColorsWithoutRept = allColorsWithRep.filter(function (este, i) {
			return allColorsWithRep.indexOf(este) === i;
		});
		setAllColors(allColorsWithoutRept);
		setColorSelected(allColorsWithoutRept[0]);
	}, [modalData]);

	useEffect(() => {
		const detail = modalData.details_product.filter(
			(detail) => detail.color === colorSelect
		);

		if (detail.length > 0 && detail[0].photos.length > 0) {
			const photos = detail[0].photos.map((photo, index) => ({
				id:    index,
				image: photo,
			}));
		}

		//setSizeSelected("");
		const sizes = detail.map((size) => size.size);
		sizes.sort((a, b) => {
			if (a === 'U' || a === 'P' || a === 'M' || a === 'G' || a === 'GG' ||
			    b === 'U' || b === 'P' || b === 'M' || b === 'G' || b === 'GG') {
				if ((a === 'P' || a === 'U') ||
				    (a === 'M' && (b === 'G' || b === 'GG')) ||
				    (a === 'G' && b === 'GG')) {
					return -1;
				}
			}
			return Number(a) < Number(b) ? -1 : 0;
		});
		setSiteSizeSelected(sizes[0]?.toString() ?? '');

		detail.length > 0 && detail[0].photos.length > 0 ? setImageUrl(detail[0].photos[0]) : setImageUrl('');

		setAllSizes(sizes);
	}, [colorSelect]);

	function addItemCart(item) {
		if (!sizeSelected || sizeSelected.length === 0) {
			toast.warn('Por favor selecione ao menos um tamanho', {
				position:        'bottom-left',
				autoClose:       5000,
				hideProgressBar: false,
				closeOnClick:    true,
				pauseOnHover:    true,
				draggable:       true,
			});
			return;
		}

		if (!colorSelect || colorSelect.length === 0) {
			toast.warn('Por favor selecione ao menos uma cor', {
				position:        'bottom-left',
				autoClose:       5000,
				hideProgressBar: false,
				closeOnClick:    true,
				pauseOnHover:    true,
				draggable:       true,
			});
			return;
		}

		const detailSelected = detailsProductAll.find((detail) => detail.size === sizeSelected && detail.color === colorSelect);

		if (!detailSelected) {
			toast.error(
				'Ocorreu um erro ao adicionar ao carrinho, por favor tente novamente mais tarde.',
				{
					position:        'bottom-left',
					autoClose:       5000,
					hideProgressBar: false,
					closeOnClick:    true,
					pauseOnHover:    true,
					draggable:       true,
				}
			);
			return;
		}

		const ccart = JSON.parse(localStorage.getItem('@ilooksecommerce_cart'));
		const product = ccart?.find((prod) => prod.productDetail.id === detailSelected.id);
		const qtyRequested = (product?.qty ?? 0) + qty;

		const cartQtyTotal = ccart?.reduce((totalizador, item) => {
			return totalizador += item.qty;
		}, 0);

		if (cartQtyTotal + qty > max) {
			toast.warn(
				`Quantidade máxima de ${max} peças por pedido`,
				{
					position:        'bottom-left',
					autoClose:       5000,
					hideProgressBar: false,
					closeOnClick:    true,
					pauseOnHover:    true,
					draggable:       true,
				}
			);
			return;
		}

		if (detailSelected.quantity < qtyRequested) {
			toast.warn(
				`Estoque disponível de ${detailSelected.quantity} para esta peça nesta cor e tamanho`,
				{
					position:        'bottom-left',
					autoClose:       5000,
					hideProgressBar: false,
					closeOnClick:    true,
					pauseOnHover:    true,
					draggable:       true,
				}
			);
			return;
		}

		dispatch(
			addToCart({
				          ...item,
				          qty:           qty,
				          total:         item.outletPrice > 0 ? item.outletPrice * qty : item.price * qty,
				          productDetail: detailSelected,
			          })
		);
		// dispatch(addToCart({ ...item, total: item.price * qty, qty: qty }));

		toast.success('Adicionado ao carrinho', {
			position:        'bottom-left',
			autoClose:       5000,
			hideProgressBar: false,
			closeOnClick:    true,
			pauseOnHover:    true,
			draggable:       true,
		});
	}

	function checkIsExist(item) {
		console.log('ITEM:', item);
		const teste = card?.find((item) => modalData.id === item.id);
		if (!teste) {
			addItemCart(item);
			return;
		} else {
			dispatch(removeItem(item.id));
			addItemCart({...item, qty});
		}
		return;
	}

	const modalClose = (close) => {
		return closeModal(modalClose);
	};

	const IncrementItem = () => {
		if (qty < 10) {
			return setQty(qty + 1);
		} else {
			return null;
		}
	};

	const DecreaseItem = () => {
		if (qty > 1) {
			return setQty(qty - 1);
		}
	};

	const handleActiveColor = (color: string) => {
		setColorSelected(color);
	};

	return (
		<div
			className="modal fade productQuickView show"
			style={{paddingRight: '16px', display: 'block'}}
		>
			<ToastContainer/>
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<button
						type="button"
						onClick={modalClose}
						className="close"
						data-dismiss="modal"
						aria-label="Close"
					>
            <span aria-hidden="true">
              <i className="fas fa-times"></i>
            </span>
					</button>
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-6">
							<div className="productQuickView-image">
								<img src={imageUrl} alt="image"/>
							</div>
						</div>

						<div className="col-lg-6 col-md-6">
							<div className="product-content">
								<h3>
									<Link href="#">
										<a>{modalData?.title}</a>
									</Link>
								</h3>

								<div className="price">
									{modalData.outletPrice > 0
									 ? <>
										 <span>de&nbsp;</span>
										 <span className="new-price" style={{textDecoration: 'line-through'}}>{new Intl.NumberFormat('br-BR', {style: 'currency', currency: 'BRL',}).format(modalData?.price)}</span>
										 <span>&nbsp;por&nbsp;</span>
										 <span className="new-price">{new Intl.NumberFormat('br-BR', {style: 'currency', currency: 'BRL',}).format(modalData.outletPrice)}</span>
									 </>
									 : <span className="new-price">{new Intl.NumberFormat('br-BR', {style: 'currency', currency: 'BRL',}).format(modalData?.price)}</span>
									}

								</div>

								<ul className="product-info">
									<li>
										<span>Marca:</span>{' '}
										<Link href={`/products?provider=${modalData.providerId}`}>
											<a>{modalData?.provider}</a>
										</Link>
									</li>
									{/*<li>
									 <span>Disponivel:</span>{" "}
									 <Link href="#">
									 <a>
									 Em estoque ({modalData.qty} item
									 {modalData.qty > 0 ? "s" : ""})
									 </a>
									 </Link>
									 </li>*/}
									<li>
										<span>Tipo do material:</span>{' '}
										<Link href="#">
											<a>{modalData.materialType}</a>
										</Link>
									</li>
								</ul>

								<div className="product-color-switch">
									<h4>Cor:</h4>

									<div
										style={{
											display:       'flex',
											flexDirection: 'row',
										}}
									>
										{allColors.map((color, index) => (
											<CircleColors
												key={`${index}${color}color`}
												color={color}
												active={color === colorSelect}
												onClick={() => {
													handleActiveColor(color);
												}}
											/>
										))}
									</div>

								</div>

								<div className="product-size-wrapper">
									<h4>Tamanho:</h4>

									<ul>
										{allSizes.map((size, index) => (
											<>
												{detailsProductAll.find(
													(s) => s.size === size && s.color === colorSelect
												) &&
												 detailsProductAll.find(
													 (s) => s.size === size && s.color === colorSelect
												 ).quantity > 0 ? (
													 <li
														 key={`${index}${size}size`}
														 className={size === sizeSelected ? 'active' : ''}
														 style={{
															 cursor: 'pointer',
														 }}
														 onClick={() => {
															 setSiteSizeSelected(size);
														 }}
													 >
														 <a>{size}</a>
													 </li>
												 ) : (
													 <></>
												 )}
											</>
										))}
									</ul>

								</div>

								<div className="product-add-to-cart">
									<div className="input-counter">
                    <span className="minus-btn" onClick={DecreaseItem}>
                      <i className="fas fa-minus"></i>
                    </span>
										<input
											type="text"
											value={qty}
											min={min}
											max={max}
											onChange={(e) => setQty(Number(e.target.value))}
										/>
										<span className="plus-btn" onClick={IncrementItem}>
                      <i className="fas fa-plus"></i>
                    </span>
									</div>

									<button
										type="submit"
										className="btn btn-primary"
										onClick={() => checkIsExist(modalData)}
									>
										<i className="fas fa-cart-plus"></i> Adicionar ao Carrinho
									</button>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		card: state.card,
	};
};

export default connect(mapStateToProps)(QuickView);
