import { FaEdit, FaTrashAlt } from 'react-icons/fa';

interface CardAddressProps {
    id?: string;
    nickname?: string
    phone?: string;
    description?: string;
    primary?: boolean;
    handleChangePrimary?: any;
}

export default function CardAddress({
    id,
    nickname,
    phone,
    description,
    primary,
    handleChangePrimary
}: CardAddressProps) {
    return (
        <div className="card-address-container">
            <div className="card-address-header">
                <span>{nickname}</span>

                <div style={{
                    paddingBottom: 10,

                }}>
                    <FaEdit size={25} style={{
                        cursor: 'pointer',
                    }} />

                    {
                        !primary && (<FaTrashAlt size={20} style={{
                            cursor: 'pointer',
                        }}  />)
                    }
                    
                </div>
            </div>

            <div className="card-address-content">
                {phone}<br />
                {description}<br />
                <br />
                <hr />

                <div className="rb-custom" onClick={() => {
                    handleChangePrimary(id);
                }}> 
                    <input type="radio" />
                    <div className="circle">
                        {
                            primary && (<div className="active"></div>)
                        }
                    </div>
                    
                    <span>selecionar como principal</span>
                </div>
            </div>
        </div>
    )
}