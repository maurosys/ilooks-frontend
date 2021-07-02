import { FiSearch } from 'react-icons/fi';

const FieldSearch = () => {
    return (
        <div className="container-field-search">
            <input type="text" placeholder="Procure aqui o seu pedido" />
            <div style={{
                paddingLeft: 10,
            }}>
                <button style={{
                    border: 'none',
                    backgroundColor: 'transparent'
                }}>
                    <FiSearch size={30} style={{
                        fontWeight: 'bold',
                        marginTop: 2
                    }} />
                </button>
            </div>
        </div>
    )
}

export default FieldSearch;