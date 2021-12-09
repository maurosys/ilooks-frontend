import api                          from '@services/api';
import React, {useEffect, useState} from 'react';
import {useRouter}                  from 'next/router';
import Modal                        from 'react-modal';

import ButtonPrimary   from '@components/Button/Primary';
import ButtonSecondary from '@components/Button/Secondary';

//STYLES
import styles                                          from './style.module.css';
//HOOKS
import useRequestDevolution, {ProductDevolutionProps,} from '@hooks/components/useRequestDevolution';

//TYPES
import {ItemsProps} from '@components/orderItem';

const customStyles = {
  content: {
    top:         '50%',
    left:        '50%',
    right:       'auto',
    bottom:      'auto',
    marginRight: '-50%',
    transform:   'translate(-50%, -50%)',
  },
};

interface ModalRequestDevolutionItemProps {
  orderId: any;
  modalIsOpen?: boolean;
  setModalIsOpen?: any;
  items?: ItemsProps[];
  itemsSelected?: string[];
  amount: string;
  couponId: string;
}

interface ItemPropsWihtQuantity extends ItemsProps {
  quantityDev: number;
  devolutionMotive: string;
  devolutionMotiveOther: string;
}

const ModalRequestDevolutionItem = ({
                                      orderId,
                                      modalIsOpen,
                                      setModalIsOpen,
                                      items,
                                      itemsSelected,
                                      amount,
                                      couponId
                                    }: ModalRequestDevolutionItemProps) => {
  //HOOKS INSTANCES
  const {handleSubmitDevolution, loading} = useRequestDevolution();
  const router = useRouter();
  const [devolutionMotive, setDevolutionMotive] = useState('');
  const [outros, setOutros] = useState<boolean>(false);
  const [podePostar, setPodePostar] = useState<boolean>(false);
  const [newTotal, setNewTotal] = useState<number>(0);
  const [applyCoupon, setApplyCoupon] = useState<string>('none');
  const [coupon, setCoupon] = useState<any>(undefined);
  const [observation, setObservation] = useState<string>('');
  const [installments, setInstallments] = useState<number>(1);
  const [parcelas, setParcelas] = useState<string[]>([]);
  const [parcela, setParcela] = useState('à vista');
  let devolutionTotal: number = 0;
  const currencyFormater = new Intl.NumberFormat('pt-br', {
    style:    'currency',
    currency: 'BRL',
  });

  //STATES
  const [itemsRendering, setItemsRendering] = useState<ItemPropsWihtQuantity[]>(
    []
  );

  useEffect(() => {
    if (itemsSelected && items) {
      const newArray: ItemPropsWihtQuantity[] = [];
      devolutionTotal = 0;
      console.log('SEL>', itemsSelected);
      itemsSelected.map((itemSel: any) => {
        const object: any = items.find((item: any) => item.productDetailId === itemSel);
        if (object) {
          newArray.push({...object, quantityDev: 1,});
          devolutionTotal += Number(object.unitPrice);
        }
      });

      setItemsRendering([...newArray]);
      const totalUpdated: number = Number(amount) - devolutionTotal;
      setNewTotal(totalUpdated);
      console.log('NTT.:', totalUpdated);
      if (couponId) {
        getCoupon();
      }

      if (totalUpdated >= 1500) {
        setParcelas([
                      'à vista',
                      '2x sem juros',
                      '3x sem juros',
                      '4x sem juros',
                      '5x sem juros',
                      '6x sem juros',
                    ]);
      } else if (totalUpdated >= 900) {
        setParcelas([
                      'à vista',
                      '2x sem juros',
                      '3x sem juros',
                      '4x sem juros',
                      '5x sem juros',
                    ]);
      } else if (totalUpdated >= 600) {
        setParcelas([
                      'à vista',
                      '2x sem juros',
                      '3x sem juros',
                      '4x sem juros',
                    ]);
      } else if (totalUpdated >= 400) {
        setParcelas(['à vista', '2x sem juros', '3x sem juros']);
      } else if (totalUpdated >= 100) {
        setParcelas(['à vista', '2x sem juros']);
      } else {
        setParcelas(['à vista']);
      }
    }
  }, [itemsSelected, items]);

  function closeModal() {
    setNewTotal(Number(amount));
    setModalIsOpen(false);
  }

  async function getCoupon() {
    await api.get(`coupon/${couponId}`)
             .then((resp: any) => {
               const total: number = Number(amount) - devolutionTotal;
               setCoupon(resp.data);
               console.log('Coupon:', `Min: ${resp.data.minimum}, nTot: ${newTotal}, Tot: ${total}`);
               if (resp.data.minimum <= total) {
                 if (resp.data.amount > 0) {
                   setNewTotal(total - coupon.amount);
                 } else {
                   const cValue: number = (newTotal * coupon.percent) / 100;
                   setNewTotal(total - cValue);
                 }

                 setApplyCoupon('none');
               } else {
                 setApplyCoupon('line-through');
               }
             })
             .catch((err: any) => {
               console.log('Erro ao carregar o cupom do pedido');
             });
  }

  async function submit() {
    const dataRequest: ProductDevolutionProps[] = itemsRendering.map((item) => ({
      productDetailId:    item.productDetailId,
      quantity:           item.quantityDev,
      motive_description: item.devolutionMotiveOther ?? 'Outros',
      devolution_motive:  item.devolutionMotive ?? 'Outros',
    }));

    //console.log('OBS:', observation);

    const response: any = await handleSubmitDevolution({
                                                         orderId,
                                                         observation,
                                                         productsDevolutions: dataRequest,
                                                         couponId:            applyCoupon == 'none' ? coupon?.id : '',
                                                         installments,
                                                       });
    if (response) {
      router.push(`/request/detail/${orderId}`);
    }
  }

  return (
    <div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <div className={styles['container-modal']}>
          <h3>Informe o motivo e quantidade da sua devolução</h3>
          <hr/>

          <div style={{display: 'flex', maxWidth: '900px', overflowX: 'scroll',}}>
            {itemsRendering.map((item, index) => (
              <div className={styles.card} onClick={() => {
              }}>
                <img src={item.imageUrl} alt="teste"/>
                <hr/>
                <p>{item.title}</p>

                <div style={{display: 'flex', flexDirection: 'column', paddingBottom: '2px',}}>
                  <span>
                    <strong>Tamanho:</strong> {item.size}
                  </span>
                  <span style={{display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
                    <strong>Cor:</strong>{' '}
                    <div style={{width: 10, height: 10, borderRadius: 5, background: item.color, marginRight: 3, marginLeft: 3,}}/>
                  </span>
                  <span>
                    <strong>Qtde. Comprada:</strong> {item.quantity}
                    <br/>
                    <strong>Preço un.:</strong>{' '}
                    {currencyFormater.format(item.unitPrice)}
                  </span>
                  <strong>Qtde. a devolver</strong>
                  <input type="number" min={1} max={item.quantity} value={item.quantityDev} style={{textAlign: 'center'}}
                         onChange={(e: any) => {
                           let array = itemsRendering;
                           const value = e.target.value;

                           if (value) {
                             const numbersString: string = value.replace(/[^0-9]/g, '');
                             if (numbersString.length <= 0) {
                               array[index].quantityDev = 1;
                               setItemsRendering([...array]);
                             } else {
                               const numberInt = parseInt(numbersString);
                               if (numberInt === 0) {
                                 array[index].quantityDev = 1;
                                 setItemsRendering([...array]);
                               } else if (numberInt <= item.quantity) {
                                 array[index].quantityDev = numberInt;
                                 setItemsRendering([...array]);
                               }
                             }
                           } else {
                             array[index].quantityDev = 1;
                             setItemsRendering([...array]);
                           }
                           // calcular subtotal
                           let subTotal = 0;
                           itemsRendering.forEach((item) => {
                             subTotal += item.quantityDev * item.unitPrice;
                           });
                           setNewTotal(Number(amount) - subTotal);
                         }}
                  />
                  <span>
										<strong>Motivo de devolução</strong>
										<select onChange={(e: any) => {
                      let array = itemsRendering;
                      array[index].devolutionMotive = e.target.value;
                      setItemsRendering([...array]);
                      const naoPode = array.filter((i) => i.devolutionMotive == '0').length > 0;
                      setPodePostar(!naoPode);
                    }}>
											<option value="0">-- Selecione --</option>
											<option value="Tamanho">Tamanho</option>
											<option value="Modelagem">Modelagem</option>
											<option value="Não gostei da peça">Não gostei da peça</option>
											<option value="Outros">Outros</option>
										</select>
                    {itemsRendering[index].devolutionMotive == 'Outros' && (
                      <tr>
                        <td colSpan={2}>
                      <textarea maxLength={100} rows={2} style={{width: '100%'}}
                                onChange={(e: any) => {
                                  let array = itemsRendering;
                                  array[index].devolutionMotiveOther = e.target.value;
                                  setItemsRendering([...array]);
                                }}
                      ></textarea>
                        </td>
                      </tr>
                    )}
										</span>
                </div>
              </div>
            ))}
          </div>

          <hr/>

          <div>
            <label htmlFor="edtObservation">Observações para a coleta:</label>
            <textarea id="edtObservation" rows={2} style={{width: '100%'}}
                      onChange={(e: any) => {
                        e.preventDefault();
                        setObservation(e.target.value);
                      }}
            ></textarea>
          </div>
          <div>
            <h6>Pagamento</h6>
            <table style={{width: '100%'}}>
              <tr>
                <td>
                  {coupon && <>
										<strong>Cupom de desconto:</strong>
										&nbsp;<span style={{textDecoration: applyCoupon}}>-{currencyFormater.format(coupon.amount > 0 ? coupon.amount : ((newTotal * coupon.percent) / 100))}</span>&nbsp;
                    {applyCoupon != 'none' && <div style={{color: 'red', fontStyle: 'italic'}}>Pedido ficou abaixo do valor mínimo para o cupom ({currencyFormater.format(coupon.minimum)})</div>}
										<br/>
									</>}
                  <strong>Valor Original: </strong>
                  {currencyFormater.format(Number(amount))}
                  <br/>
                  <strong>Novo Valor: </strong>
                  {currencyFormater.format(newTotal)} <br/>
                </td>
                <td>
                  <label htmlFor="cboParcelas">Parcelas: </label>&nbsp;
                  <select id="cboParcelas" value={parcela}
                          onChange={(e: any) => {
                            e.preventDefault();
                            if (e.target.value === 'à vista') {
                              setInstallments(1);
                            } else {
                              setInstallments(e.target.value.substr(0, 1));
                            }
                            setParcela(e.target.value);
                          }}
                  >
                    {parcelas.map((item) => {
                      return <option value={item}>{item}</option>;
                    })}
                  </select>
                </td>
              </tr>
            </table>
          </div>

          <div style={{marginTop: '30px', borderTop: '1px solid #222', paddingTop: '10px', paddingBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
            <ButtonPrimary style={{marginRight: '10px'}} loading={loading} disabled={!podePostar} onClick={submit} title={podePostar?'':'Selecione o motivo para todas as peças'} >Confirmar Devolução</ButtonPrimary>
            <ButtonSecondary onClick={() => {
              setModalIsOpen(false);
            }}>Cancelar Devolução</ButtonSecondary>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalRequestDevolutionItem;
