import { useRouter } from 'next/router';
import { FiArchive } from 'react-icons/fi';
import { MdCardGiftcard, MdAccountCircle, MdLocationOn, MdContactPhone } from 'react-icons/md';

const Details = (props) => {
    const router = useRouter();

    return (
        <div style={{
            width: 180,
        }}>
           
            <div className="menu-options-orders">
                <ul>
                    <li className="active"><span><MdCardGiftcard size={30} /> <span>Pedidos</span></span></li>
                    <li><span><MdAccountCircle size={30} /> <span>Cadastro</span></span></li>
                    <li><span><MdLocationOn size={30} /> <span>Endereços</span></span></li>
                    <li><span><MdContactPhone size={30} /> <span>Telefones</span></span></li>
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