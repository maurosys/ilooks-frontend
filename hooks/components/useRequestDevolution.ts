import {useState} from 'react';

//SERVICE
import api from '@services/api';

//TYPES
export type ProductDevolutionProps = {
	productDetailId: string;
	quantity: number;
};

interface SubmitRequestProps {
	orderId: any;
	observation?: string;
	productsDevolutions: ProductDevolutionProps[];
	installments: number;
	couponId?: string;
}

const useRequestDevolution = () => {
	//STATES
	const [loading, setLoading] = useState<boolean>(false);

	const handleSubmitDevolution = async ({
		                                      orderId,
		                                      observation,
		                                      productsDevolutions,
		                                      installments,
		                                      couponId
	                                      }: SubmitRequestProps): Promise<any> => {
		try {
			const response = await api.post(
				`request/devolution/${orderId}`, {
					observation:  observation,
					amount:       0,
					installments: installments,
					couponId:     couponId,
					items:        productsDevolutions
				}
			);
			return response.data;
		} catch (error) {
			console.log(error);
			return undefined;
		}
	};

	return {
		loading,
		handleSubmitDevolution,
	};
};

export default useRequestDevolution;
