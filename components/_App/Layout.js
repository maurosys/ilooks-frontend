import React from "react";
import Head from "next/head";
import GoTop from "../Shared/GoTop";
import { ToastContainer, Slide } from "react-toastify";
import ReactTooltip from "react-tooltip";

const Layout = ({ children }) => {
  return (
    <>
      <ReactTooltip />

      <Head>
        <title> Ilooks </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta          name="description"           content="ILooks - RESERVE | EXPERIMENTE | COMPRE SOMENTE O QUE GOSTAR!"
        />
        <meta
          name="og:title"
          property="og:title"
          content="ILooks - RESERVE | EXPERIMENTE | COMPRE SOMENTE O QUE GOSTAR!s"
        ></meta>
        <meta
          name="twitter:card"
          content="ILooks - RESERVE | EXPERIMENTE | COMPRE SOMENTE O QUE GOSTAR!"
        ></meta>
        <link rel="canonical" href="https://novine-react.envytheme.com/"></link>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
        />

        <meta
          property="og:image"
          content="https://res.cloudinary.com/dev-empty/image/upload/v1590076309/ppuymfucr4jubqvhqaqt.jpg"
        />

        {/* <script src="nprogress.js"></script> */}
      </Head>

      {children}

      <ToastContainer transition={Slide} />

      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  );
};
export default Layout;
