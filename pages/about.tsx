import Header   from '../components/Layout/HeaderFixed';
import Footer   from '../components/Layout/Footer';
import Facility from '../components/shop-style-five/Facility';

const About = () => {
	return (
		<>
			<Header/>

			<section className="about-area ptb-60">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-12">
							<div className="about-content">
								<h2>RESERVE| EXPERIMENTE| COMPRE SOMENTE O QUE GOSTAR.</h2>
								<div className="row">
									<div className="col-lg-9">
										<p>
											Somos muito mais que uma loja on-line de Moda. Valorizar seu tempo é nossa principal Missão.
										</p>
										<p>
											A ILooks nasceu com o propósito de inovar o mercado de Moda no Brasil oferecendo aos nossos clientes uma experiência de
											compra única, totalmente diferente de qualquer loja on-line de Moda.
										</p>
										&nbsp;
									</div>
								</div>
								<div className="row">
									<div className="col-lg-2 col-sm-12" style={{borderStyle: 'solid', borderRadius: 30, borderWidth: 1, padding: 10, margin: 5, minHeight: 300}}>
										<div style={{textAlign: 'center', margin: 20}}>
											<img src={require('../images/qsExperimente.jpg')}/>
										</div>
										<p>
											<b>Experimente antes de comprar.</b><br/>
											Um dos nossos diferenciais é oferecer aos nossos clientes a comodidade de experimentar,
											tocar e sentir o produto antes da efetivação da compra.
										</p>
									</div>

									<div className="col-lg-2 col-sm-12" style={{borderStyle: 'solid', borderRadius: 30, borderWidth: 1, padding: 10, margin: 5, minHeight: 300}}>
										<div style={{textAlign: 'center', margin: 20}}>
											<img src={require('../images/qsEntregas.jpg')}/>
										</div>
										<p>
											<b>Entregas.</b><br/>
											Entregas rápidas com experiência praticamente delivery também faz do nosso negócio único, afinal sempre aparece aquele evento,
											ou compromisso de última hora em você pode contar com a agilidade de nossas entregas.
										</p>
									</div>

									<div className="col-lg-2 col-sm-12" style={{borderStyle: 'solid', borderRadius: 30, borderWidth: 1, padding: 10, margin: 5, minHeight: 300}}>
										<div style={{textAlign: 'center', margin: 20}}>
											<img src={require('../images/qsDevolucao.jpg')}/>
										</div>
										<p>
											<b>Devoluções.</b><br/>
											Se nossas entregas vão até você, por que você precisa ir até os correios se algo der errado?
											Entregamos e retiramos os produtos no conforto do seu lar oferecendo comodidade total ao nossos
											consumidores sem que saiam de suas casas.
										</p>
									</div>

									<div className="col-lg-2 col-sm-12" style={{borderStyle: 'solid', borderRadius: 30, borderWidth: 1, padding: 10, margin: 5, minHeight: 300}}>
										<div style={{textAlign: 'center', margin: 20}}>
											<img src={require('../images/qsCuradoria.jpg')}/>
										</div>
										<p>
											<b>Curadoria.</b><br/>
											Nossa equipe conta com profissionais antenados no mundo da moda que selecionam as melhores marcas,
											focando na curadoria para que a experiência do consumidor dentro da ILooks seja completa e facilitada.
										</p>
									</div>
								</div>

							</div>
						</div>

					</div>
				</div>
			</section>

			<Facility/>

			<Footer/>
		</>
	);
};

export default About;
