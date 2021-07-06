import { useRouter } from 'next/router';
import Link from 'next/link'
import { FiArchive } from 'react-icons/fi';
import { MdCardGiftcard, MdAccountCircle, MdLocationOn, MdContactPhone } from 'react-icons/md';

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
                        itemsMenu.map(item => {
                            return (
                                <Link href={item.route}><li className={path === item.route && "active"}><span>{item.icon} <span>{item.label}</span></span></li></Link>
                            )
                        })
                    }

                </ul>
            </div>
            <hr />
            
            <div className="menu-option-orders-details">
                <button className="btn btn-secondary">fale com a gente</button>
                <img src={require("../../images/ilooks.png")} alt="logo" style={{
                    width: 100,
                    marginTop: 50
                }} />
            </div>
    
        </div>
    )
}

export default Details;