import Header                       from '../components/Layout/HeaderFixed';
import Footer                       from '../components/Layout/Footer';
import Facility                     from '../components/shop-style-five/Facility';
import React, {useEffect, useState} from "react";
import api                          from "@services/api";

const About = () => {
	const [textoSobre, setTextoSobre] = useState('');

	useEffect(() => {
		api.get('system/texts/about').then((resp: any) => {
			if (resp.data) {
				setTextoSobre(resp.data.value);
			}
		}).catch((error: any) => {
			console.log(error);
		});
	}, []);

	return (
		<>
			<Header/>

			<section className="about-area ptb-60">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<div dangerouslySetInnerHTML={{__html: textoSobre}}/>
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
