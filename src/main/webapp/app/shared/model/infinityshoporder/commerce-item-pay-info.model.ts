export const enum ItemPayStatus {
  INIT = 'INIT',
  PAID = 'PAID'
}

export interface ICommerceItemPayInfo {
  id?: number;
  status?: ItemPayStatus;
  quantity?: number;
  orderPaymentId?: number;
}

export const defaultValue: Readonly<ICommerceItemPayInfo> = {};
