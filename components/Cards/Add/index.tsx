import { FiPlusCircle } from 'react-icons/fi';

interface CardAddProps {
    label?: string;
}

const CardAdd = ({
    label = 'novo endereço'
}: CardAddProps) => {
    return (
        <div className="card-address-add-container">
            <FiPlusCircle size={40} />
            <label>{label}</label>
        </div>
    )
}

export default CardAdd;