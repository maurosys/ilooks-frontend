import React, {useEffect, useState} from "react";
import OwlCarousel                  from "react-owl-carousel3";
import api                          from "@services/api";

const options = {
  items: 1,
  loop: true,
  nav: true,
  dots: false,
  smartSpeed: 2000,
  autoplay: true,
  autoplayHoverPause: true,
  navText: [
    "<i class='fas fa-angle-left'></i>",
    "<i class='fas fa-angle-right'></i>",
  ],
};

const BannerSlider = () => {
	const [display, setDisplay] = useState(false);
	const [banners, setBanners] = useState([]);

	const loadBanners = async () => {
		api.get('system/banners').then((resp: any) => {
			if (resp.data) {
				const _iniciais = resp.data.filter((banner: any) => banner.type == 'inicial');
				setBanners(_iniciais);
				setDisplay(true);
			}
		}).catch((error: any) => {
			console.log(error);
		});
	}

	useEffect(() => {
		loadBanners();
	}, [])

	return (
		<>
			{display ? (
				<OwlCarousel
					className="home-slides-two owl-carousel owl-theme"
					{...options}
					style={{marginTop: 65}}
				>
					{banners.map((banner: any) => <div key={banner.id} className="banner-section" style={{backgroundImage: `url(${banner.value})`}}></div>)}
				</OwlCarousel>
			) : (
				 ""
			 )}
		</>
	);
}


export default BannerSlider;
