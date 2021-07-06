import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { addToCart } from '../../store/ducks/Card/actions';

const AddToCart = (data) => {
    const dispatch = useDispatch()

    const handleAddToCart = (data) => {
        dispatch(addToCart(data))

        toast.success('Adicionado com sucesso', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    return(
        <Link href="#">
            <a 
                className="btn btn-light"
                onClick={(e) => {
                    e.preventDefault(); handleAddToCart(data)
                }}
            >
                Adicionar ao Carrinho
            </a>
        </Link>
    )
}

export default AddToCart;