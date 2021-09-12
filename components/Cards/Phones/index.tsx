import {FaEdit, FaTrashAlt} from 'react-icons/fa';

interface CardPhoneProps {
  id?: string;
  nickname?: string;
  phone?: string;
  description?: string;
  primary?: boolean;
  handleChangePrimary?: any;
  handleEdit?: any;
  handleDelete?: any;
}

export default function CardPhone({
                                      id,
                                      nickname,
                                      phone,
                                      description,
                                      primary,
                                      handleChangePrimary,
                                      handleEdit,
                                      handleDelete,
                                    }: CardPhoneProps) {
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
            !primary && (<FaTrashAlt onClick={() => {
              handleDelete(id);
            }} size={20} style={{
              cursor: 'pointer',
            }}/>)
          }

        </div>
      </div>

      <div className="card-address-content">
        {phone}<br/>
        {description}<br/>
        <br/>
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
