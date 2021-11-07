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
						<div className="col-lg-6 col-md-12">
							<div className="about-content">
								<h2>Quem somos.</h2>
								&nbsp;<br/>
								<p><b>RESERVE| EXPERIMENTE| COMPRE SOMENTE O QUE GOSTAR.</b></p>
								<p>Somos muito mais que uma loja on-line de Moda. Valorizar seu tempo é nossa principal Missão.</p>
								<p>A Ilooks nasceu com o propósito de inovar o mercado de Moda no Brasil oferecendo aos nossos clientes uma experiência de compra única,
									totalmente diferente de qualquer loja on-line de Moda.</p>
								<p>
									<b>Experimente antes de comprar.</b><br/>
									Um dos nossos diferenciais é oferecer aos nossos clientes a comodidade experimentar, tocar e sentir o produto antes da efetivação de compra.
								</p>
								<p>
									<b>Entregas.</b><br/>
									Entregas rápidas com Entregas.
									Entregas rápidas com experiência praticamente delivery também faz do nosso negócio único, afinal sempre aparece aquele evento, ou compromisso
									de última hora e você pode contar com a Ilooks e agilidade de nossas entregas.experiência praticamente delivery também faz do nosso negócio único,
									afinal sempre aparece aquele evento, ou compromisso de última hora e você pode contar com a Ilooks e agilidade de nossas entregas.
								</p>
								<p>
									<b>Devoluções.</b><br/>
									Se nossas entregas vão até você, por que você precisa ir até os correios se algo der errado?<br/>
									Entregamos e retiramos os produtos no conforto do seu lar oferecendo comodidade total aos nossos consumidores sem que saiam de suas casas.
								</p>
								<p>
									<b>Curadoria</b><br/>
									Nossa equipe conta com profissionais antenados no mundo da moda que selecionam as melhores as marcas, focando na curadoria para que a experiência
									do consumidor dentro da Ilooks seja completa e facilitada.
								</p>
							</div>
						</div>

						<div className="col-lg-6 col-md-12">
							<div className="about-image">
								<img
									src={require('../images/about1.jpg')}
									className="about-img1"
									style={{maxWidth:310}}
									alt="image"
								/>

								<img
									src={require('../images/about2.jpg')}
									className="about-img2"
									style={{maxWidth:310}}
									alt="image"
								/>
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
