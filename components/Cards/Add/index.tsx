import {FiPlusCircle} from 'react-icons/fi';

interface CardAddProps {
  label?: string;
  handleAdd?: any;
}

const CardAdd = ({
                   label = 'novo endereço',
                   handleAdd
                 }: CardAddProps) => {
  return (
    <div className="card-address-add-container">
      <FiPlusCircle size={40} onClick={handleAdd}/>
      <label>{label}</label>
    </div>
  );
};

export default CardAdd;
