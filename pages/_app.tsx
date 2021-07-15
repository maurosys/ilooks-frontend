import '../public/assets/styles/bootstrap.min.css';
import '../public/assets/styles/fontawesome.min.css';
import '../public/assets/styles/animate.min.css';
import '../public/assets/styles/slick.css';
import '../public/assets/styles/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-image-lightbox/style.css';
import '../public/assets/styles/style.css';
import '../public/assets/styles/responsive.css';
import '../public/assets/styles/custom.css';

import Layout from '../components/_App/Layout';
import { AppProps } from 'next/app'
import { Provider } from 'react-redux';
// import withRedux from 'next-redux-wrapper';
import store from '../store';

const MyApp = ({ Component, pageProps }:AppProps) => {
    return (
        <Layout>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </Layout>
    );
}

export default MyApp