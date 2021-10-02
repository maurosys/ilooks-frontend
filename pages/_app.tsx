import "../public/assets/styles/bootstrap.min.css";
import "../public/assets/styles/fontawesome.min.css";
import "../public/assets/styles/animate.min.css";
import "../public/assets/styles/slick.css";
import "../public/assets/styles/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-image-lightbox/style.css";
import "../public/assets/styles/style.css";
import "../public/assets/styles/responsive.css";
import "../public/assets/styles/custom.css";
import "react-notifications-component/dist/theme.css";

import Router from "next/router";
import Layout from "../components/_App/Layout";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import ReactNotification from "react-notifications-component";
// import withRedux from 'next-redux-wrapper';
import NProgress from "nprogress";
import getConfig from "next/config";

import store from "../store";

const { publicRuntimeConfig } = getConfig();
NProgress.configure({ showSpinner: publicRuntimeConfig.NProgressShowSpinner });

Router.events.on("routeChangeStart", (url) => {
  console.log("onRouteChangeStart triggered");
  NProgress.start();
});

Router.events.on("routeChangeComplete", (url) => {
  console.log("onRouteChangeComplete triggered");
  NProgress.done();
});

Router.events.on("routeChangeError", (url) => {
  console.log("onRouteChangeComplete triggered");
  NProgress.done();
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Provider store={store}>
        <ReactNotification />
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
};

export default MyApp;
