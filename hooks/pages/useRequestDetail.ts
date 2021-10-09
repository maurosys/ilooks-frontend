import { useState } from "react";

//SERVICES
import api from "@services/api";

//TYPES
import { OrderItemProps } from "@components/orderItem";
import { RequestDetailsResponse } from "@type/global";

const useRequestDetail = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getRequest = async (id: any): Promise<OrderItemProps> => {
    setLoading(true);
    setError(true);
    try {
      const response = await api.get(`request/details/${id}`);
      const data: RequestDetailsResponse = response.data;

      const request: OrderItemProps = {
        id,
        orderStatus: data.status_request,
        numberOrder: data.id,
        items: data.products.map((product) => ({
          productDetailId: product.productDetailsId,
          title: product.name,
          productId: product.id,
          size: product.size,
          color: product.color,
          quantity: product.quantity,
          imageUrl: product.photos[0],
        })),
        statusHistory: data.statusHistory,
        amount: data.amount,
        freight: data.freight,
        customer: data.customer,
      };

      setLoading(false);
      setError(false);
      return request;
    } catch (error) {
      setLoading(false);
      setError(true);
      return undefined;
    }
  };

  return {
    loading,
    error,
    getRequest,
  };
};

export default useRequestDetail;
