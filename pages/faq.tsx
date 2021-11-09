import Abrangencia                                                                                from '@components/Modal/Abrangencia';
import PoliticaDevolucao                                                                          from '@components/Modal/PolitcaDevolucao';
import React, {useState}                                                                          from 'react';
import {Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel,} from 'react-accessible-accordion';
import Footer                                                                                     from '../components/Layout/Footer';
import Header                                                                                     from '../components/Layout/HeaderFixed';
import Facility                                                                                   from '../components/shop-style-five/Facility';

const Faq = () => {
  const [modalPoliticaDevolucao,setModalPoliticaDevolucao] = useState(false);
  const [modalAbrangencia,setModalAbrangencia] = useState(false);

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
          <div className="section-title">
            <h2>
              <span className="dot"></span> Perguntas frequentes
            </h2>
          </div>

          <div className="faq-accordion">
            <ul className="accordion">
              <Accordion>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      COMO FUNCIONA O SERVIÇO DA ILOOKS?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Escolha tudo que o gostar em nossa plataforma, roupas, acessórios ou calçados.<br/>
                      Vamos realizar a entrega dos produtos no endereço cadastrado, você terá 48h úteis para experimentar tudo com conforto e no seu tempo. <br/>
                      Pague apenas o que decidir ficar.

                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      OS PRODUTOS VENDIDOS SÃO DA ILOOKS?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Não. Nossa plataforma funciona como Shopping virtual, nosso time de curadoria estuda as tendências de moda,
                      faz a seleção das melhores marcas afim de garantir variedade e qualidade dos produtos aos nossos consumidores.<br/>
                      As marcas parceiras disponibilizam seus produtos em nossa plataforma e a ILOOKS realiza todo processo de entregas
                      e devoluções sem que você precise sair de casa.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      COMO FUNCIONA O PAGAMENTO?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <ul>
                      Através do cartão de crédito cadastrado é realizada uma pré reserva no valor total dos produtos escolhidos.<br/>
                      Não se preocupe, os valores somente serão debitados após o período de 48h que é o prazo para sua experiência de prova.
                    </ul>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      COMO FUNCIONA O PARCELAMENTO?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <ul>
                      Vamos realizar uma pré reserva do valor total do seu pedido. Você deve decidir ainda na pré reserva se deseja realizar o parcelamento e
                      indicar o número de parcelas. Após as 48h do seu período de prova, no caso de ficar com o pedido integral seu processo de compra será
                      efetivado automaticamente na modalidade parcelada.<br/>
                      Caso haja devoluções parciais, no ato da devolução você poderá atualizar o número de parcelas baseados nos valores atualizados de sua compra.

                    </ul>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      POR QUE PRECISO CADASTRAR MEU CARTÃO CRÉDITO, EXISTE OUTRO MEIO PARA PAGAMENTO?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Não disponibilizamos outros meios de pagamento, somente cartão de crédito.<br/>
                      Durante o período de prova precisamos ter uma garantia. Trata-se de nossa política de prevenção de perdas.

                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      COMO REALIZAR AS DEVOLUÇÕES?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Após experimentar todos os itens, você decide o que vai comprar e o que deseja devolver.<br/>
                      As devoluções podem ser realizadas integralmente, ou, parcialmente em nossa plataforma através do botão
                      “devolução”, o processo leva menos de 1 minuto para ser concluído.<br/>
                      (Acesse política de devolução e o passo a passo clicando <a style={{display:"inline-block"}} href="#" onClick={(e:any) => setModalPoliticaDevolucao(true)}> aqui</a>.)<br/>
                      Pronto! Vamos retirar os itens que deseja devolver no mesmo endereço de entrega, garantindo comodidade total para você não precisar sair de casa.

                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      NOS CASOS DE DEVOLUÇÃO PARCIAL, OU, INTEGRAL, EM QUE MOMENTO A PRÉ RESERVA É ESTORNADA?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Realizado o processo de devolução, vamos retirar os produtos em no máximo em 48h.  Após retirada será r
                      ealizada uma triagem que pode levar até 5 dias úteis afim de garantir a integridade das peças devolvidas.<br/>
                      Após a triagem concluída lhe enviaremos um e-mail confirmando o estorno da pré reserva.

                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      EM QUE MOMENTO A EFETIVAÇÃO DO PAGAMENTO É REALIZADA?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <ul>
                      Trabalhamos com a reserva de crédito no valor total dos produtos escolhidos no cartão de crédito cadastrado em nossa plataforma.<br/>
                      Após o recebimento do seu pedido você terá até 48h para devolver o que deseja.<br/>
                      Expirado esse prazo sem que haja qualquer devolução o valor integral do pedido será debitado.

                    </ul>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      COMO REALIZAR UMA TROCA?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <ul>
                      Não realizamos trocas, apenas devoluções dentro do período de 48h.<br/>
                      Lembrem-se, sua experiência será:<br/>
                      RESERVE| EXPERIMENTE| COMPRE SEMENTE O QUE GOSTAR!

                    </ul>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      O SERVIÇO É GRATIS?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <ul>
                      Sim, não cobramos nenhum adicional pelo serviço, nossa missão é ajudar nossos consumidores a economizar tempo e ter um serviço de qualidade e praticidade.

                    </ul>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      EXISTE ALGUM VALOR DE PEDIDO MÍNIMO, OU, OBRIGAÇÃO DE COMPRA?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Não. Você só paga pelos produtos que quiser comprar. Caso não goste de nada do que enviamos, basta nos
                      enviar de volta todos os produtos nas condições originais, embalagem, lacres de segurança sem violação e etiqueta.<br/>
                      Não há nenhuma obrigação de compra.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      EXISTE ALGUM LIMITE PARA VALOR, OU, QUANTIDADE DE PEÇAS PARA RESERVA?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Você poderá escolher até 10 peças por pedido e não existe limitação de valor.

                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      A ILOOKS TRABALHA COM ENVIO DE MALAS?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Não. Nosso modelo de negócio é único e realizamos todo trabalho de curadoria prévia com as marcas parceiras,
                      garantindo produtos de muita qualidade.<br/>
                      Em nossas redes sociais realizamos um trabalho diferenciado sobre dicas de moda, cartela de cores, combinações
                      de looks com os melhores profissionais para facilitar suas compras. Deixamos nossos consumidores a vontade para
                      escolherem o que mais combina com seu estilo.


                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      QUAIS REGIÕES DE ATENDIMENTO?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Atendemos SP Capital e Grande SP com exceção de aéreas de risco.<br/>
                      (Consulte se seu CEP está em nossa região de atendimento clicando <a style={{display:"inline-block"}} href="#" onClick={(e:any) => setModalAbrangencia(true)}>aqui</a>)
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      COMO É FEITA A ENTREGA DOS PRODUTOS?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Todos os produtos vendidos pela ILOOKS, são entregues através de transportadores parceiros,
                      as embalagens são exclusivas com nossa marca.<br/>
                      Antes de receber a entrega, verifique se o pacote não está violado. Caso esteja não aceite o
                      pacote e entre em contato com a Central de Relacionamento.<br/>
                      Quando um pedido contém mais de um produto, os itens podem ser entregues separadamente, devido
                      a diversidade das marcas que trabalhamos. Caso não receba algum item de seu pedido, entre
                      em contato com nossa Central de Relacionamento.

                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      QUAL O PRAZO DE ENTREGA?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Após realizar o pedido o prazo de entrega será de até 48h. Será contado a partir da confirmação do
                      pedido realizado que enviaremos via e-mail.<br/>
                      Você poderá realizar o rastreamento de sua entrega em nosso site.

                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      EM QUE MOMENTO RECEBO A NOTA FISCAL DOS PRODUTOS COMPRADOS?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Após a efetivação de sua compra enviaremos sua NOTA FISCAL ELETRONICA através do e-mail cadastrado em até 2 dias úteis.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      COMO FUNCIONA A GARANTIA POR DEFEITO DOS PRODUTOS?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      A garantia por vícios, ou, defeitos dos produtos que estiverem dentro do prazo de 90 dias conforme direito do consumidor,
                      serão tratadas pela ILOOKS juntamente com a marcas fabricantes. Você deverá entrar em contato com nosso time de atendimento
                      para que possamos orienta-lo sobre o processo e prazos.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>


              </Accordion>
            </ul>
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
