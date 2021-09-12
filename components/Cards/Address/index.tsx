import {FaEdit, FaTrashAlt} from 'react-icons/fa';

interface CardAddressProps {
  id?: string;
  nickname?: string;
  address?: string;
  zipcode?: string;
  district?: string;
  city?: string;
  state?: string;
  primary?: boolean;
  handleChangePrimary?: any;
  handleEdit?: any;
  handleDelete?: any;
}

export default function CardAddress({
                                      id,
                                      nickname,
                                      address,
                                      zipcode,
                                      district,
                                      city,
                                      state,
                                      primary,
                                      handleChangePrimary,
                                      handleEdit,
                                      handleDelete,
                                    }: CardAddressProps) {
  return (
    <div className="card-address-container">
      <div className="card-address-header">
        <span>{nickname}</span>

        <div style={{
          paddingBottom: 10,

        }}>
          <FaEdit onClick={() => {
            handleEdit(id);
          }} size={25} style={{
            cursor: 'pointer',
          }}/>
          {
            !primary && (<FaTrashAlt size={20} onClick={() => {
              handleDelete(id);
            }} style={{
              cursor: 'pointer',
            }}/>)
          }
        </div>
      </div>

      <div className="card-address-content">
        {address}<br/>
        {zipcode} - {district}<br/>
        {city}/{state}<br/>
        <hr/>

        <div className="rb-custom" onClick={() => {
          handleChangePrimary(id);
        }}>
          <input type="radio"/>
          <div className="circle">
            {
              primary && (<div className="active"></div>)
            }
          </div>

          <span>selecionar como principal</span>
        </div>
      </div>
    </div>
  );
}
