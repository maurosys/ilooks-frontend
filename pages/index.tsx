//SERVICE
import api                                   from '@services/api';
import {CategoryRequest, SubCategoryRequest} from '@type/request';
import Head                                  from 'next/head';
import {useEffect, useState}                 from 'react';
import {useDispatch}                         from 'react-redux';
import InstagramPhoto                        from '../components/Common/InstagramPhoto';
import Partner                               from '../components/Common/Partner';
import Footer                                from '../components/Layout/Footer';
import Header                                from '../components/Layout/Header';
import BannerSlider                          from '../components/shop-style-five/BannerSlider';
import Facility                              from '../components/shop-style-five/Facility';
import Products                              from '../components/shop-style-five/Products';
import {Products as ProductsPros}            from '../store/ducks/products/types';
import {GetStaticProps}                      from "next";
import {store}                               from "react-notifications-component";

//TYPES
interface StateProps {
  productss: ProductsPros[];
  categories: CategoryRequest[];
  subCategories: SubCategoryRequest[];
}

type Props = StateProps;

const Index = ({productss, categories, subCategories}: Props) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [subscription, setSubscription] = useState(false);

  const recesso = true;
  const [emailRecesso, setEmailRecesso] = useState('');

  const imgRecesso = require("../images/img-recesso.jpg");
  const divRecesso: any = {
    backgroundColor:     "#73228D",
    backgroundImage:     `url('${imgRecesso}')`,
    width:               "101vw",
    height:              "101vh",
    backgroundSize:      "contain",
    backgroundPositionX: "center",
    backgroundRepeat:    "no-repeat",
    backgroundPositionY: "top"
  }
  const divEmailRecesso: any = {
    position:  "absolute",
    marginTop: "49%",
    textAlign: "center",
    width:     "100%"
  }
  const enviarEmailRecesso = async () => {
    if (emailRecesso) {
      try {
        const registroRecesso = await api.post('user/emailrecesso', {email: emailRecesso});
      } catch (err:any) {
        console.log(err);
      }

      store.addNotification({
                              title:        "Confirmação",
                              message:      'E-mail registrado, aguarde as novidades',
                              type:         "success",
                              insert:       "top",
                              container:    "top-right",
                              animationIn:  ["animate__animated", "animate__fadeIn"],
                              animationOut: ["animate__animated", "animate__fadeOut"],
                              dismiss:      {
                                duration: 5000,
                                onScreen: true,
                              },
                            });

      setEmailRecesso('');
    }
  }


  useEffect(() => {
    if (process.env.NEXT_PUBLIC_AMBIENTE === 'PRODUCAO') {
      if (window.location.protocol !== 'https:' || window.location.hostname.indexOf('ilooks.com.br') < 0) {
        window.location.href = 'https://www.ilooks.com.br';
      }
    }
    //dispatch(loadResquestProduct());
    if (!recesso) {
      loadProducts();
      const subs = localStorage.getItem('@ilooksecommerce_subscription');
      if (subs) {
        setSubscription(true);
      }
    }
  }, []);

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
      {!recesso && <>
				<Header categories={categories} subCategories={subCategories}/>

				<BannerSlider/>

				<Facility/>

        {/*<CategoryTypes/>*/}

				<Products products={products}/>

        {/*<ProductsOffer/>*/}
				<img src={require("../images/offer-bg2.png")}/>

				<Partner/>

        {/*<Subscribe/>*/}

				<InstagramPhoto/>

				<Footer/>
			</>
      }
      {recesso &&
			 <div style={divRecesso}>
				 <div style={divEmailRecesso}>
					 <input type="email" value={emailRecesso} placeholder="Informe aqui o seu e-mail..." style={{width: '70%', maxWidth: '300px'}} onChange={(e: any) => {
             e.preventDefault();
             setEmailRecesso(e.target.value);
           }
           }/>
					 <input type="button" value="Enviar" style={{border: "solid 1px orange", backgroundColor: "#73228D", color: "#FFFFFF", paddingLeft: "20px", paddingRight: "20px"}} onClick={enviarEmailRecesso}/>
				 </div>
			 </div>
      }
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

export default Index;
