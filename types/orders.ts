export enum StatusRequest {
  ACCOMPLISHED = "Realizado",
  READY = "Separado para entrega",
  RECEIVED_CARRIER = "Recebido transportadora",
  IN_TRANSIT = "Em trânsito",
  DELIVERED = "Entregue",
  IN_BACK = "Em devolução",
  CANCELED = "Cancelado"
}

export enum StatusPayment {
  PENDENT = "Pendente",
  RESERVE = "Pré reservado",
  CONFIRMED = "Confirmado",
  NOT_AUTHORIZED = "Não autorizado",
  CANCELED = "Cancelado"
}

export enum StatusDevolution {
  REQUESTED = "Devolução solicitada",
  IN_TRANSIT = "Coleta programada",
  IN_CARRIER = "Com transportadora",
  VALIDATION = "Aguardando validação Ilooks",
  ACCEPTED = "Devolução aceita e autorizada",
  REFUSED = "Devolução aceita e autorizada",
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
