export enum StatusRequest {
  ACCOMPLISHED = "Realizado",
  RECEIVED_CARRIER = "Recebido Transportadora",
  IN_TRANSIT = "Em Trânsito",
  DELIVERED = "Entregue",
  IN_BACK = "Em Devolução",
  CANCELED = "Cancelado",
}

export enum StatusPayment {
  PENDENT = "Pendente",
  RESERVE = "Pré reservado",
  CONFIRMED = "Confirmado",
  NOT_AUTHORIZED = "Não autorizado",
  CANCELED = "Cancelado",
}

export type OrderItem = {
  productId: string;
  title: string;
  quantity: number;
  imageUrl: string;
  color: string;
  size: string;
};

export type StatusHistoryItem = {
  id: string;
  status_request: StatusRequest;
  status_payment: StatusPayment;
  change_date: Date | string;
  action_date: Date | string;
  requestId: string;
};

export type OrderReponse = {
  numberOrder: string;
  orderStatus: StatusRequest;
  items: OrderItem[];
  statusHistory: StatusHistoryItem[];
};
