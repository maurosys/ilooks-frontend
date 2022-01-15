import React, {useEffect, useState} from 'react';
import Footer                       from '../components/Layout/Footer';
import Header                       from '../components/Layout/HeaderFixed';
import Facility                     from '../components/shop-style-five/Facility';
import api                          from "@services/api";

const PoliticaDevolucao = () => {
  const [textoDevolucao, setTextoDevolucao] = useState('');

  useEffect(() => {
    api.get('system/texts/devolution').then((resp: any) => {
      if (resp.data) {
        setTextoDevolucao(resp.data.value);
      }
    }).catch((error: any) => {
      console.log(error);
    });
  }, []);

  return (
    <>
      <Header/>

      <section className="faq-area ptb-60">
        <div className="container">

          <div dangerouslySetInnerHTML={{__html: textoDevolucao}}/>

        </div>
      </section>

      <Facility/>

      <Footer/>
    </>
  );
};

export default PoliticaDevolucao;
