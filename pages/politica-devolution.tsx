import React    from 'react';
import Footer   from '../components/Layout/Footer';
import Header   from '../components/Layout/HeaderFixed';
import Facility from '../components/shop-style-five/Facility';

const PoliticaDevolucao = () => {
  return (
    <>
      <Header/>

      <section className="faq-area ptb-60">
        <div className="container">
          <div className="section-title">
            <h2>
              <span className="dot"></span> POLÍTICA DE DEVOLUÇÃO
            </h2>
          </div>

          <div>
            <p>
              Caro cliente (consumidor), abaixo você encontrará informações importantes sobre os procedimentos de devolução do seu pedido.
              Tais informações são importantes, assim, pedimos que você as leia com toda atenção.
            </p>
            <p>
              Qualquer dúvida entre em contato através dos nossos Canais de Atendimento disponíveis em nosso site nos seguintes dias e horários
              de atendimento: segunda-feira a sexta-feira entre às 08h00m e 18h00m e aos sábados entre às 08h00m e 11h00m.
            </p>
            <p>
              <b>Também pedimos que leia com atenção a nossa Política de Uso da Plataforma. </b>
            </p>
            <p>
              <ol>
                <li>
                  A manifestação de devolução da mercadoria deverá ocorrer dentro de 48 (quarenta e oito) horas corridas,
                  contadas do recebimento do pedido.
                </li>
                <li>
                  Você deverá acessar a sua conta através do login e senha para posteriormente acionar o pedido de devolução
                  através do botão “DEVOLUÇÃO” seja integral ou parcial, lembrando que a medida somente terá validade dentro
                  das 48 (quarenta e oito) horas acima mencionadas.
                </li>
                <li>
                  Você deverá selecionar as peças que deseja devolver e, tão logo selecionadas, justificar a ILOOKS o motivo da devolução.
                </li>
                <li>
                  Efetivado o pedido de devolução integral ou parcial, tomaremos as providencias necessárias para a retirada do pedido.
                </li>
                <li>
                  Os produtos/pedidos deverão ser devolvidos em sua embalagem, selo e lacre originais, sem apresentar qualquer indício
                  de uso e acompanhados da eventual nota fiscal, eventuais manuais e todos os seus eventuais acessórios, sob pena de
                  não aceite da devolução, efetivação da compra através da reserva prévia de crédito e, por fim, nova remessa do pedido a você.
                </li>
                <li>
                  Para tanto, enviaremos também embalagem extras para a eventual devolução do pedido pelo CONSUMIDOR ao final da prova.
                </li>
                <li>
                  Para maior comodidade, a ILOOKS disponibilizará à sua conta on line cadastrada na plataforma digital, informação de
                  data e hora limites para a manifestação de devolução do pedido.
                </li>
              </ol>
            </p>
            <p>
              <b>
                PROCESSO DE DEVOLUÇÃO VIA RETIRADA PROCESSO DE DEVOLUÇÃO VIA RETIRADA DOMICILIAR
              </b>
            </p>
            <p>
              <ol>
                <li>
                  Havendo a sua manifestação de devolução do pedido, seja ela integral ou parcial, você deverá iniciar o processo
                  de devolução disponível em nosso site.
                </li>
                <li>
                  Notificados da sua vontade de devolução integral ou parcial do pedido, retiraremos os itens em até 3 dias úteis,
                  contados da ciência, em seu domicílio já cadastrado na plataforma, mediante prévio agendamento via e-mail tão somente quanto à data.
                </li>
                <li>
                  Se nem você ou algum terceiro autorizado não forem localizados na data e local agendados, será debitado o
                  valor consignado ao cartão de crédito cadastrado.
                </li>
              </ol>
            </p>
          </div>
        </div>
      </section>

      <Facility/>

      <Footer/>
    </>
  );
};

export default PoliticaDevolucao;
