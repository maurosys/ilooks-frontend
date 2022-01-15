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
  REQUESTED  = 'Devolução solicitada',
  IN_CARRIER = 'Pré com transportadora',
  IN_TRANSIT = 'Transportadora a caminho',
  VALIDATION = 'Validação com Ilooks',
  ACCEPTED   = 'Devolução aceita e autorizada',
  REJECTED   = 'Devolução recusada',
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
  status_devolution: StatusDevolution;
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

const tipoTexto = [
  {value: 'about', name: 'Sobre a ILooks'},
  {value: 'faq', name: 'FAQ'},
  {value: 'lgpd', name: 'LGPD'},
  {value: 'term', name: 'Termos de Uso'},
  {value: 'payment', name: 'Comunicado Pagamento'},
  {value: 'devolution', name: 'Política de Devolução'},
];
