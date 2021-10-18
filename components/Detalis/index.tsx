import { useRouter } from 'next/router';
import Link from 'next/link'

import { MdCardGiftcard, MdAccountCircle, MdLocationOn, MdContactPhone } from 'react-icons/md';
import React from "react";



const Details = (props) => {
    const router = useRouter();
    const path = router.pathname;

    const itemsMenu = [
        {
            icon: <MdCardGiftcard size={30} />,
            label: 'Pedidos',
            route: '/orders',
        },
        {
            icon: <MdAccountCircle size={30} />,
            label: 'Cadastro',
            route: '/account',
        },
        {
            icon: <MdLocationOn size={30} />,
            label: 'Endereços',
            route: '/address',
        },
        {
            icon: <MdContactPhone size={30} />,
            label: 'Telefones',
            route: '/phones',
        }
        
    ] 
    
    return (
        <div className="container-menu-orders">
           
            <div className="menu-options-orders">
                <ul>
                    {
                        itemsMenu.map((item, index) => {
                            return (
                                <Link href={item.route} key={index}><li className={path === item.route ? "active" : ''}><span>{item.icon} <span>{item.label}</span></span></li></Link>
                            )
                        })
                    }

                </ul>
            </div>
            <hr />
            
            <div className="menu-option-orders-details">
                <Link href="/contact-us">
                    <button className="btn btn-secondary" style={{
                        backgroundColor: '#222',
                        borderRadius: 5,
                    }}>fale com a gente</button>
                </Link>

                <img src={require("../../images/ilooks.png")} alt="logo" style={{
                    width: 100,
                    marginTop: 50
                }} />
            </div>
    
        </div>
    )
}

export default Details;