import React, {useEffect, useState} from 'react';
import Footer                       from '../components/Layout/Footer';
import Header             from '../components/Layout/HeaderFixed';
import Facility           from '../components/shop-style-five/Facility';
import api                from "@services/api";

const Termo = () => {
  const [textoTermo, setTextoTermo] = useState('');

  useEffect(() => {
    api.get('system/texts/term').then((resp: any) => {
      if (resp.data) {
        setTextoTermo(resp.data.value);
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
          <div dangerouslySetInnerHTML={{__html: textoTermo}}/>
        </div>
      </section>

      <Facility/>

      <Footer/>
    </>
  );
};

export default Termo;
