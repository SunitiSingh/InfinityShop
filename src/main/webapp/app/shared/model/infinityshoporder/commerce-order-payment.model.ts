import { ICommerceItem } from 'app/shared/model/infinityshoporder/commerce-item.model';

export const enum PayStatus {
  INITIAL = 'INITIAL',
  AUTHORIZED = 'AUTHORIZED',
  SETTLED = 'SETTLED',
  AUTH_FAILED = 'AUTH_FAILED',
  SETTLE_FAILED = 'SETTLE_FAILED'
}

export const enum CommercePaymentType {
  CARD = 'CARD',
  EPAY = 'EPAY'
}

export interface ICommerceOrderPayment {
  id?: number;
  paystatus?: PayStatus;
  paymentAmount?: number;
  paymentType?: CommercePaymentType;
  firstName?: string;
  lastName?: string;
  billingPhone?: string;
  commerceOrderId?: number;
  cardId?: number;
  epayId?: number;
  billingAddressId?: number;
  items?: ICommerceItem[];
}

export const defaultValue: Readonly<ICommerceOrderPayment> = {};
