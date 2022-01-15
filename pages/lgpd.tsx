import React, {useEffect, useState} from 'react';
import Footer                       from '../components/Layout/Footer';
import Header                       from '../components/Layout/HeaderFixed';
import Facility                     from '../components/shop-style-five/Facility';
import api                          from "@services/api";

const Lgpd = () => {
	const [textoLgpd, setTextoLgpd] = useState('');

	useEffect(() => {
		api.get('system/texts/lgpd').then((resp: any) => {
			if (resp.data) {
				setTextoLgpd(resp.data.value);
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
					<div dangerouslySetInnerHTML={{__html: textoLgpd}}/>
				</div>
			</section>

			<Facility/>

			<Footer/>
		</>
	);
};

export default Lgpd;
