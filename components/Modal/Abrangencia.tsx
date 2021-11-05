import React, {useState} from "react";
import Link from "next/link";
import ButtonPrimary from "@components/Button/Primary";

interface AbrangenciaProps {
	closeModal: (close) => void;
}

const Abrangencia = ({closeModal}: AbrangenciaProps) => {
	const [open, setOpen] = useState(false);
	
	const modalClose = (close) => {
		return closeModal(modalClose);
	};
	
	return (
		<div
			className="modal fade productQuickView show"
			style={{marginTop:"20px", display: "block", height:"80vh", overflow:"auto"}}
		>
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<button
						type="button"
						onClick={modalClose}
						className="close"
						data-dismiss="modal"
						aria-label="Close"
					>
			            <span aria-hidden="true">
			              <i className="fas fa-times"></i>
			            </span>
					</button>

					<table className="table table-bordered">
						<thead>
						<tr><th scope="col" colSpan={6} style={{textAlign:"center"}}>ABRANGÊNCIA DE ENTREGAS ILOOKS</th></tr>
						<tr>
							<th scope="col">CEP&nbsp;INICIAL</th>
							<th scope="col">CEP&nbsp;FINAL</th>
							<th scope="col">UF</th>
							<th scope="col">CIDADE</th>
							<th scope="col">ROTA</th>
							<th scope="col">LOGRADOURO/BAIRRO</th>
						</tr>
						</thead>
						<tbody>
							<tr><td>01000-000</td><td>01099-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>CENTRO - Sé / Santa Efigênia / República / Centro</td></tr>
							<tr><td>01100-000</td><td>01199-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>BOM RETIRO - Barra Funda / Bom Retiro / Luz / Ponte Pequena</td></tr>
							<tr><td>01200-000</td><td>01299-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>VILA BUARQUE - Santa Cecília/ Pacaembú / Sumaré / Higienópolis / Consolação</td></tr>
							<tr><td>01300-000</td><td>01399-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>CONSOLAÇÃO - Consolação / Bela Vista</td></tr>
							<tr><td>01400-000</td><td>01499-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>JARDINS - Cerqueira César / Jardim Paulista / Jardim América / Jardim Europa</td></tr>
							<tr><td>01500-000</td><td>01599-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>LIBERDADE - Liberdade / Cambuci / Aclimação / Vila Monumento / Jardimda Glória</td></tr>
							<tr><td>02000-000</td><td>02099-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>SANTANA - Santana / Carandiru / Vila Guilherme / Jardim São Paulo</td></tr>
							<tr><td>02100-000</td><td>02199-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>VILA MARIA - Vila Maria / Parque Novo Mundo / Jardim Japão</td></tr>
							<tr><td>02200-000</td><td>02299-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>JAÇANÃ E TUCURUVI - Tucuruvi / Jaçanã / Parque Edu Chaves / Vila Medeiros / Vila Edi</td></tr>
							<tr><td>02300-000</td><td>02399-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>TREMEMBÉ - Jardim Tremembé / Barro Branco / Água Fria</td></tr>
							<tr><td>02400-000</td><td>02499-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>MANDAQUI - Mandaqui / Imirim / Lausane Paulista / Santa Teresinha</td></tr>
							<tr><td>02500-000</td><td>02599-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>CASA VERDE - Casa Verde / Parque Peruche</td></tr>
							<tr><td>02600-000</td><td>02699-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>CACHOEIRINHA - Vila Nova Cachoeirinha / Jardim Peri Peri</td></tr>
							<tr><td>02700-000</td><td>02799-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>LIMÃO - Limão / Nossa Senhora do Ó / Itaberaba</td></tr>
							<tr><td>02800-000</td><td>02899-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>BRASILÂNDIA - Brasilândia / Morro Grande</td></tr>
							<tr><td>02900-000</td><td>02999-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>FREGUESIA DO Ó - Freguesia do Ó / Pirituba / Piqueri</td></tr>
							<tr><td>03000-000</td><td>03099-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>BRÁS - Belenzinho / Brás / Belém / Pari / Canindé / Catumbi</td></tr>
							<tr><td>03100-000</td><td>03199-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>MOÓCA - Moóca / Alto da Moóca / Vila Prudente / A. Rosa / Quarta Parada / Parque Moóca / Vila Zelina</td></tr>
							<tr><td>03200-000</td><td>03299-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>SÃO LUCAS - VilaEma / Parque São Lucas / Vila Alpina / Sapopemba</td></tr>
							<tr><td>03300-000</td><td>03399-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>ANÁLIA FRANCO - Tatuapé / Vila Formosa / Jardim Colorado / Vila Gomes Cardim / JardimAnália Franco</td></tr>
							<tr><td>03400-000</td><td>03499-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>CARRÃO E ARICANDUVA - Vila Carrão / Carrãozinho</td></tr>
							<tr><td>03500-000</td><td>03599-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>VILA MATILDE - Vila Matilde / Cidade Patriarca / Artur Alvim</td></tr>
							<tr><td>03600-000</td><td>03699-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>PENHA - Penha / Vila Esperança / Vila Ré / Cidade A. E. Carvalho</td></tr>
							<tr><td>03700-000</td><td>03799-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>CANGAÍBA - Cangaiba / Engenho Goulart / Ponte Rasa</td></tr>
							<tr><td>03800-000</td><td>03899-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>ERMELINO MATARAZZO - Ermelino Matarazzo / Vila Paranaguá</td></tr>
							<tr><td>03900-000</td><td>03999-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>SÃO MATEUS – São Mateus / Iguaçu</td></tr>
							<tr><td>08000-000</td><td>08099-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>SÃO MIGUEL PAULISTA</td></tr>
							<tr><td>08100-000</td><td>08199-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>ITAIM PAULISTA</td></tr>
							<tr><td>08200-000</td><td>08299-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>ITAQUERA</td></tr>
							<tr><td>08300-000</td><td>08399-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>SÃO MATEUS</td></tr>
							<tr><td>08400-000</td><td>08499-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>GUAIANAZES</td></tr>
							<tr><td>04000-000</td><td>04099-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>MOEMA E VILA MARIANA (OESTE) - Vila Mariana / Vila Clementino / Paraíso / Indianópolis / Moema / Planalto Paulista / Mirandópolis</td></tr>
							<tr><td>04100-000</td><td>04199-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>SAÚDE E VILA MARIANA (LESTE) - Jardim Glória / Saúde / Água Funda / Vila Mercês / Vila Liviero</td></tr>
							<tr><td>04200-000</td><td>04299-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>IPIRANGA - Ipiranga / Vila Carioca / Sacomã / Moinho Velho / São João Clímaco</td></tr>
							<tr><td>04300-000</td><td>04399-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>JABAQUARA - Jabaquara / Jardim Aeroporto / Vila Sta Catarina / Vila Guarani / Vila Mascote</td></tr>
							<tr><td>04500-000</td><td>04599-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>ITAIM BIBI - Brooklin Novo / Itaim Bibi / Vila Olímpia / Moema / Vila Nova Conceição</td></tr>
							<tr><td>04600-000</td><td>04699-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>CAMPO BELO - Brooklin Paulista / Campo Belo / Aeroporto / Cidade Ademar / Campo Grande / Jurubatuba / Chácara Flora / Chácara Monte Alegre</td></tr>
							<tr><td>04700-000</td><td>04799-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>SANTO AMARO - Santo Amaro / Chácara Santo Antônio / Granja Julieta / Socorro / Veleiros / Interlagos / Alto da Boa Vista</td></tr>
							<tr><td>04800-000</td><td>04899-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>CIDADE DUTRA E GRAJAÚ - Cidade Dutra / Rio Bonito / Parque Grajaú / Parelheiros</td></tr>
							<tr><td>04900-000</td><td>04999-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>GUARAPIRANGA - Guarapiranga / Capela do Socorro</td></tr>
							<tr><td>05000-000</td><td>05099-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>LAPA E PERDIZES - Lapa / Perdizes / Água Branca / Alto da Lapa / Vila Anastácia / Pompéia / Vila Romana</td></tr>
							<tr><td>05100-000</td><td>05199-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>PIRITUBA E JARAGUÁ - Vila Jaguara / Pirituba / Parque São Domingos</td></tr>
							<tr><td>05200-000</td><td>05299-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>PERUS - Jaraguá / Perus</td></tr>
							<tr><td>05300-000</td><td>05399-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>JAGUARÉ E LEOPOLDINA - Vila Leopoldina / Ceasa / Jaguaré / Rio Pequeno / Vila Hamburguesa / Vila Remédios</td></tr>
							<tr><td>05400-000</td><td>05499-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>PINHEIROS - Pinheiros / Vila Madalena / Alto de Pinheiros</td></tr>
							<tr><td>05500-000</td><td>05599-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>BUTANTÃ - Butantã / Caxingui / Cidade Universitária (USP) / JardimPeri-Peri / JardimBonfiglioli</td></tr>
							<tr><td>05600-000</td><td>05699-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>MORUMBI - Cidade Jardim / Morumbi / Vila Sônia / Jardim Guedala / Jardim Leonor / Real Parque</td></tr>
							<tr><td>05700-000</td><td>05799-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>CAMPO LIMPO - Campo Limpo / Pirajuçara</td></tr>
							<tr><td>05800-000</td><td>05899-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>CAPÃO REDONDO - Capão Redondo / Vila Das Belezas</td></tr>
							<tr><td>06000-000</td><td>06299-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>Osasco</td></tr>
							<tr><td>06300-000</td><td>06399-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>G-SP</td></tr>
							<tr><td>06400-000</td><td>06499-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>G-SP</td></tr>
							<tr><td>06500-000</td><td>06549-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>Santana do Parnaíba – SP</td></tr>
							<tr><td>06650-000</td><td>06699-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>G-SP</td></tr>
							<tr><td>06600-000</td><td>06649-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>G-SP</td></tr>
							<tr><td>06700-000</td><td>06729-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>G-SP</td></tr>
							<tr><td>06750-000</td><td>06799-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>G-SP</td></tr>
							<tr><td>06800-000</td><td>06849-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>Embu das Artes</td></tr>
							<tr><td>06850-000</td><td>06899-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>Itapecerica da Serra G-SP</td></tr>
							<tr><td>06900-000</td><td>06999-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>Embu-Guaçú</td></tr>
							<tr><td>07000-000</td><td>07399-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>Guarulhos</td></tr>
							<tr><td>08550-001</td><td>08569-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>Poa</td></tr>
							<tr><td>08600-000</td><td>08699-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>Suzano</td></tr>
							<tr><td>08700-000</td><td>08899-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>Mogi das Cruzes</td></tr>
							<tr><td>09000-000</td><td>09299-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>Santo André</td></tr>
							<tr><td>09300-000</td><td>09399-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>Mauá</td></tr>
							<tr><td>09500-000</td><td>09599-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>São Caetano</td></tr>
							<tr><td>09600-000</td><td>09899-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>São Bernardo</td></tr>
							<tr><td>09900-000</td><td>09999-999</td><td>SP</td><td>SÃO&nbsp;PAULO</td><td>CAPITAL</td><td>Diadema</td></tr>
						</tbody>
					</table>
					
					<ButtonPrimary type="button" onClick={closeModal}>
						Fechar
					</ButtonPrimary>
				</div>
			</div>
		</div>
	);
};

export default Abrangencia;