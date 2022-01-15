import Abrangencia                                                                                from '@components/Modal/Abrangencia';
import PoliticaDevolucao                                                                          from '@components/Modal/PolitcaDevolucao';
import React, {useEffect, useState}                                                               from 'react';
import {Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel,} from 'react-accessible-accordion';
import Footer                                                                                     from '../components/Layout/Footer';
import Header                                                                                     from '../components/Layout/HeaderFixed';
import Facility                                                                                   from '../components/shop-style-five/Facility';
import api                                                                                        from "@services/api";

const Faq = () => {
  const [modalPoliticaDevolucao,setModalPoliticaDevolucao] = useState(false);
  const [modalAbrangencia,setModalAbrangencia] = useState(false);
  const [textoFaq, setTextoFaq] = useState('');

  useEffect(() => {
    api.get('system/texts/faq').then((resp: any) => {
      if (resp.data) {
        setTextoFaq(resp.data.value);
      }
    }).catch((error: any) => {
      console.log(error);
    });
  }, []);

  const fecharAbrangencia = () => {
    setModalAbrangencia(false);
  }

  const fecharDevolucao = () => {
    setModalPoliticaDevolucao(false);
  }

  return (
    <>
      <Header/>

      <section className="faq-area ptb-60">
        <div className="container">
          <div className="faq-accordion">
            <div dangerouslySetInnerHTML={{__html: textoFaq}}/>
          </div>
        </div>
      </section>

      <Facility/>

      <Footer/>

      {modalAbrangencia &&
       <Abrangencia closeModal={fecharAbrangencia}/>
      }

      {modalPoliticaDevolucao &&
        <PoliticaDevolucao closeModal={fecharDevolucao} />
      }
    </>
  );
};

export default Faq;
