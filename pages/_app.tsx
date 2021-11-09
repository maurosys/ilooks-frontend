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

import { useState } from "react";
import Router from "next/router";
import Layout from "../components/_App/Layout";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import ReactNotification from "react-notifications-component";
// import withRedux from 'next-redux-wrapper';
import NProgress from "nprogress";

import Load from "../components/Modal/Loading/loading.gif";

import store from "../store";

const MyApp = ({ Component, pageProps }: AppProps) => {
  // NProgress.configure({ showSpinner: true });

  Router.events.on("routeChangeStart", (url) => {
    let div: any = document.createElement("div");
    div.id = "loadingGlobalTemp";
    div.style =
      "width: 100%;height: 100%;background: rgb(98 98 98 / 30%);position: fixed;top: 0;left: 0;z-index: 9999;display: flex; justify-content: center; align-items: center;";

    let divContainerLoad: any = document.createElement("div");
    divContainerLoad.style = "width: 120px; height: 120px;background: white; border-radius: 50%; display: flex; justify-content: center; align-items: center;";
    divContainerLoad.innerHTML = `<img src=${Load} alt="" width="100" height="72" />`;

    div.appendChild(divContainerLoad);
    document.body.appendChild(div);

    // NProgress.start();
  });

  Router.events.on("routeChangeComplete", (url) => {
    console.log("onRouteChangeComplete triggered");

    let div = document.getElementById("loadingGlobalTemp");
    if (div) {
      div.remove();
    }

    // NProgress.done();
  });

  Router.events.on("routeChangeError", (url) => {
    console.log("onRouteChangeComplete triggered");
    let div = document.getElementById("loadingGlobalTemp");
    if (div) {
      div.remove();
    }
    // NProgress.done();
  });
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
