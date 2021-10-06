import React    from 'react';
import Footer   from '../components/Layout/Footer';
import Header   from '../components/Layout/HeaderFixed';
import Facility from '../components/shop-style-five/Facility';

const Lgpd = () => {
  return (
    <>
      <Header/>

      <section className="faq-area ptb-60">
        <div className="container">
          <div className="section-title">
            <h2>
              <span className="dot"></span> POLÍTICA PARA TRATAMENTO DE DADOS
            </h2>
          </div>

          <div>
            <p className="text-justify">
              Este Termo é regido pela Lei 13.709/2018 (LGPD) e registra a livre manifestação de
              vontade, mediante concordância expressa do doravante denominado TITULAR, para o
              tratamento dos seus dados disponibilizados à empresa KEILA BERTI ME. cujo nome
              fantasia é o I LOOK’S MODAS, inscrita ao CNPJ/MF nº 41.076.430/0001-74, sediada
              na Avenida Deputado Emílio Carlos, nº 521, conj. 45 – Limão – São Paulo/SP –
              CEP: 02721-000, por meio do cadastro em seu <i>site</i>
              <a href="http://www.ilooks.com.br/cadastro">www.ilooks.com.br/cadastro</a>,
              doravante denominada CONTROLADORA.</p>
            <p className="bold">DOS DADOS PESSOAIS</p>
            <p>
              <span className="bold">Cláusula 1ª: </span>
              A CONTROLADORA fica autorizada a tratar os seguintes dados pessoais do TITULAR:
            </p>
            <p>
              <ol type="a">
                <li>Nome completo;</li>
                <li>Data de nascimento;</li>
                <li>Endereço completo;</li>
                <li>Número do CPF;</li>
                <li>Endereço de e-mail;</li>
                <li>Número de telefone celular e aplicativo de mensagem <i>Whatsapp </i>e;</li>
                <li>Dados do cartão de crédito.</li>
              </ol>
            </p>

            <p className="bold">DAS FINALIDADES DO TRATAMENTO DOS DADOS</p>
            <p>
              <span className="bold">Cláusula 2ª: </span>
              O tratamento dos dados pessoais listados neste termo tem as seguintes finalidades:
            </p>
            <p>
              <ol type="a">
                <li>Emissão de Notas Fiscais</li>
                <li>Viabilização de relacionamento comercial;</li>
                <li>Viabilização logística composta pela entrega do produto via
                    transportadora parceira da CONTROLADORA, qual seja: ENTREGA JÁ LOG TRANSPORTES EPP.
                    e o depósito do produto via <i>locker </i>disponibilizado e operado pela empresa parceira <i>BOXIT;</i></li>
                <li>Envio de <i>newsletter;</i></li>
                <li>Envio de novas coleções de vestuários;</li>
                <li>Envio de cupons promocionais;</li>
                <li>Envio de materiais promocionais;</li>
                <li>Divulgações acerca de alterações de lojistas e empresas parceiras;</li>
                <li>Disponibilidade do histórico comercial do cliente à sua conta cadastrada;</li>
              </ol>
            </p>

            <p className="bold">COMPARTILHAMENTO DE DADOS</p>
            <p>
              <span className="bold">Cláusula 3ª: </span>
              A CONTROLADORA fica autorizada a compartilhar
              os dados pessoais do TITULAR, excetuando-se os dos Cartões de Crédito e Débito,
              com outros agentes de tratamento de dados, caso seja necessário para as
              finalidades listadas neste termo, tais como, especialmente os parceiros para a
              operação logística da finalidade elencada no item “c”, da cláusula 2ª, contanto
              que sejam observados os princípios e as garantias estabelecidas pela Lei nº
              13.709/2018, tais como, por exemplo, a boa-fé, livre acesso, licitude das
              finalidades e a razoabilidade de utilização.<br/>
              <span className="bold">Parágrafo único: </span>
              Para fins do ora disposto, os principais parceiros da CONTROLADORA que visam atingir
              as finalidades elencadas na cláusula 2ª, são: ENTREGA JÁ LOG TRANSPORTES EPP,
              pessoa jurídica de direito privado, inscrita ao CNPJ/MF n° 29.093.475/0001-51 e
              RAZÃO SOCIAL E CNPJ DA BOXIT, sem excluir, contudo, quaisquer outros que sejam necessários para
              o alcance de quaisquer finalidades desta política.
            </p>

            <p className="bold">SEGURANÇA DOS DADOS</p>
            <p>
              <span className="bold">Cláusula 4ª: </span>
              A CONTROLADORA responsabiliza-se pela manutenção de medidas de segurança,
              técnicas e administrativas aptas a proteger os dados pessoais de acessos
              não autorizados e de situações acidentais ou ilícitas de destruição, perda,
              alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito.
            </p>
            <p>
              <span className="bold">Cláusula 5ª: </span>
              Em conformidade ao art. 48 da Lei nº 13.709/2018, a CONTROLADORA comunicará
              ao Titular e à Autoridade Nacional de Proteção de Dados (ANPD) a ocorrência
              de incidente de segurança que possa acarretar risco ou dano relevante ao TITULAR.
            </p>

            <p className="bold">TÉRMINO DO TRATAMENTO DOS DADOS</p>
            <p>
              <span className="bold">Cláusula 6ª: </span>
              A CONTROLADORA poderá manter e tratar os dados pessoais do TITULAR durante
              todo o período em que os referidos forem pertinentes ao alcance das finalidades
              listadas neste termo (cláusula 2ª) ou até que o TITULAR solicite a eliminação/exclusão
              dos seus dados da plataforma da CONTROLADORA.
            </p>
            <p>
              <span className="bold">Cláusula 7ª: </span>
              Dados pessoais anonimizados, sem possibilidade de associação ao TITULAR,
              poderão ser mantidos por período indefinido.
            </p>
            <p>
              <span className="bold">Cláusula 8ª: </span>
              O TITULAR poderá solicitar via e-mail, correspondência à CONTROLADORA,
              ou ainda, pelas simples exclusão de cadastro de conta e dados tratados,
              a qualquer momento, que sejam eliminados os seus dados pessoais não
              anonimizados (aqueles que o vinculam ao seu indivíduo), ficando o
              referido ciente de que poderá ser inviável à CONTROLADORA a ele continuar o
              fornecimento de produtos ou serviços a partir da eliminação dos dados pessoais.
            </p>

            <p className="bold">DIREITOS DO TITULAR</p>
            <p>
              <span className="bold">Cláusula 9ª: </span>
              Nos termos dos artigos 9º da Lei 13.709-2018, o TITULAR terá acesso facilitado
              aos seus dados e ao presente termo a qualquer tempo, o qual, por sua vez,
              estará disponível no seguinte <i>link/aba </i>
              <a href="http://www.ilooks.com.br/termo">www.ilooks.com.br/termo</a>.
            </p>
            <p>
              <span className="bold">Cláusula 10ª: </span>
              Nos termos do artigo 18 da Lei 13.709/2018, o TITULAR tem direito a
              obter da CONTROLADORA, em relação aos dados por ele tratados, a
              qualquer momento e mediante o seu livre acesso à sua conta cadastrada:
            </p>
            <p>
              <ol type="I">
                <li>confirmação da existência de tratamento;</li>
                <li>acesso aos dados, incluindo os <i>“Registros de Operações”;</i></li>
                <li>correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou
                    tratados em desconformidade com o disposto na Lei nº 13.709;
                </li>
                <li>portabilidade dos dados a outro fornecedor de serviço ou produto, mediante
                    requisição expressa e observados os segredos comercial e industrial, de acordo
                    com a regulamentação do órgão controlador;
                </li>
                <li>portabilidade dos dados a outro fornecedor de serviço ou produto, mediante
                    requisição expressa, de acordo com a regulamentação da autoridade nacional,
                    observados os segredos comercial e industrial;
                </li>
                <li>eliminação dos dados pessoais tratados
                    com o consentimento do titular, exceto nas hipóteses previstas no art. 16 da
                    Lei nº 13.709;
                </li>
                <li>informação das entidades públicas e privadas com as quais o controlador
                    realizou uso compartilhado de dados;
                </li>
                <li>informação sobre a possibilidade de não fornecer consentimento e sobre as
                    consequências da negativa;
                </li>
                <li>revogação do consentimento, de forma facilitada e gratuita livre acesso à sua
                    conta cadastrada e mediante a simples exclusão da conta e cadastro da
                    plataforma <i>on line </i> por meio do botão <i>CANCELAMENTO DE CONTA, </i>
                    sem avisos prévios, nem penalidades, disponibilizando a CONTROLADORA, contudo,
                    o suporte técnico via o endereço de e-mail @@@@@@ilooks.com.br para a solução
                    dos eventuais problemas encontrados pelo TITULAR para cancelar a sua conta.
                </li>
              </ol>
            </p>

            <p className="bold">FORO DE ELEIÇÃO</p>
            <p>
              <span className="bold">Cláusula 11ª: </span>
              As partes elegem o Foro da Comarca de São Paulo/SP, com a exclusão de quaisquer
              outros por mais privilegiados que sejam, par dirimir os eventuais conflitos
              advindos deste Termo.
            </p>
          </div>
        </div>
      </section>

      <Facility/>

      <Footer/>
    </>
  );
};

export default Lgpd;
