import React                                                                                      from 'react';
import {Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel,} from 'react-accessible-accordion';
import Footer                                                                                     from '../components/Layout/Footer';
import Header                                                                                     from '../components/Layout/HeaderFixed';
import Facility                                                                                   from '../components/shop-style-five/Facility';

const Faq = () => {
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
                      Você escolhe tudo que gostar em nossa plataforma,
                      roupas, acessórios, calçados. <br/>
                      Vamos realizar a entrega dos produtos no endereço cadastrado, você terá 48h para
                      experimentar tudo com conforto e no seu tempo. <br/>
                      Você paga apenas o que decidir ficar.
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
                      Não. Nossa plataforma funciona como Shopping virtual, nosso time de curadoria estuda as tendências de moda e
                      faz a seleção das melhores marcas afim de garantir variedade e qualidade dos produtos aos nossos consumidores.<br/>
                      As marcas parceiras disponibilizam seus produtos em nossa plataforma e a ILOOKS realiza todo processo de entregas e
                      devoluções sem que você precise sair de casa e também realizamos todo atendimento e suporte ao cliente.
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
                      Através do cartão de crédito cadastrado é realizada uma pré reserva no valor dos produtos escolhidos.<br/>
                      Não se preocupe, os valores serão debitados somente após o período para prova de 48h, sem que o cliente realize o processo de devolução.
                    </ul>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      POR QUE PRECISO CADASTRAR MEU CARTÃO CRÉDITO, EXISTE OUTRO
                      MEIO PARA PAGAMENTO?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Não disponibilizamos outros meios de pagamento se não por cartão de crédito. <br/>
                      Durante o período de prova precisamos ter uma garantia pelo período que nossos
                      consumidores irão ficar com as roupas. Trata-se de nossa política de prevenção de perdas.<br/>
                      Após o cadastro seu cartão, será realizada uma pré-autorização de crédito no valor
                      dos produtos escolhidos, sendo que nenhum valor será debitado antes do prazo de prova
                      combinado de <span style={{color: '#f00'}}>até 48h</span>.
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
                      Após experimentar todos os itens você, decide o que vai comprar e o que deseja devolver.
                      As devoluções podem ser realizadas integral ou, parcialmente em nossa plataforma
                      através do botão “devolução”, o processo leva menos de 1 minuto para ser concluído.
                      (Acesse política de devolução e o passo a passo clicando aqui.)<br/>
                      Pronto! Vamos retirar os itens que deseja devolver no mesmo endereço a qual realizamos
                      a entrega, garantindo comodidade total para você não precisar sair de casa.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      NOS CASOS DE DEVOLUÇÃO PARCIAL, OU, INTEGRAL, EM QUE
                      MOMENTO A PRÉ RESERVA É ESTORNADA?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Realizado o processo de devolução, vamos retirar os produtos no prazo
                      combinado e realizaremos uma triagem que pode levar até 5 dias úteis
                      afim de garantir que estejam dentro da nossa política de devolução.
                      Após essa triagem, o estorno será realizado e enviaremos um e-mail
                      confirmando o estorno da operação.
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
                      Trabalhamos com a reserva de crédito no valor dos produtos escolhidos no
                      cartão de crédito cadastrado em nossa plataforma.<br/>
                      Após o recebimento do seu pedido você terá até 48h para devolver algum
                      produto caso não dê certo. Expirado esse prazo sem que haja qualquer
                      devolução o valor integral do pedido será debitado.
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
                      Devido a comodidade do serviço que oferecemos com o
                      “Reserve, Experimente e Compre somente o que gostar”,
                      não é possível realizar troca dos produtos, apenas
                      realizar as devoluções, sejam parciais ou integrais.
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
                      Sim, não cobramos nenhum adicional pelo serviço, nossa missão é ajudar
                      nossos consumidores a economizar tempo e ter um serviço de qualidade e praticidade.<br/>
                      Caso você não goste de nenhum dos produtos que enviamos, é só devolver
                      a embalagem seguindo o passo a passo de devolução,
                      (Acesse política de devolução e o passo a passo clicando aqui)
                      com as roupas nas condições originais e lacres sem violação e não
                      haverá nenhum custo pela utilização do serviço.

                    </ul>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      EXISTE ALGUM VALOR DE PEDIDO MÍNIMO, OU, OBRIGAÇÃO DE
                      COMPRA?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Não. Você só paga pelos produtos que quiser comprar.
                      Caso não goste de nada do que enviamos, basta você nos enviar de volta
                      todos os produtos nas condições originais, embalagem, lacres de
                      segurança sem violação e etiqueta. <br/>
                      Não há nenhuma obrigação de compra.
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
                      Não. Nosso modelo de negócio é único e já realizamos todo trabalho de
                      curadoria prévia com as marcas parceiras, garantindo produtos de
                      muita qualidade.<br/>
                      Em nossas redes sociais realizamos um trabalho diferenciado sobre dicas
                      de moda, cartela de cores, combinações de looks com os melhores profissionais
                      de moda para facilitar suas compras. <br/>
                      Deixamos nossos consumidores a vontade para escolherem o que mais combina com seu estilo.

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
                      Atendemos SP Capital e Grande SP com exceção de áreas de
                      risco. (Consulte se seu CEP está em nossa região de
                      atendimento clicando aqui)
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
                      Todos os produtos vendidos pela ILOOKS, são entregues
                      através de transportadores parceiros, as embalagens são
                      exclusivas com nossa marca, desenvolvidas para garantir
                      a qualidade dos produtos e evitar avarias.<br/>
                      Antes de receber a entrega, verifique se o pacote não está
                      violado. Caso esteja, não aceite o pacote e entre em contato
                      com a Central de Relacionamento.<br/>
                      Quando um pedido contém mais de um produto, os itens podem
                      ser entregues separadamente, devido a diversidade das marcas
                      que trabalhamos.<br/>
                      Caso não receba algum item de seu pedido,
                      entre em contato com nossa Central de Relacionamento.

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
                      Após realizar o pedido o prazo de entrega será informado de acordo
                      com sua localidade. Será contado a partir da confirmação do pedido
                      realizado que enviaremos via e-mail.<br/>
                      Você poderá realizar o rastreamento de sua entrega em nosso site.

                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      EM QUE MOMENTO RECEBO A NOTA FISCAL DOS PRODUTOS
                      COMPRADOS?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Após o período de prova de 48h será validado o valor de
                      reserva e efetivada a compra, enviaremos sua NOTA FISCAL
                      ELETRÔNICA através do e-mail cadastrado em até 2 dias
                      úteis.
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
                      A garantia por vícios ou, defeitos dos produtos que estiverem dentro do
                      prazo de 90 dias conforme direito do consumidor, serão tratadas pela
                      ILOOKS juntamente com a marcas fabricantes. <br/>
                      Você deverá entrar em contato com nosso time de atendimento para que
                      possamos orientar-lhe sobre o processo e prazos.
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
    </>
  );
};

export default Faq;
