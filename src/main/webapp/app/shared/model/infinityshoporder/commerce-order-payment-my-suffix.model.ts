import { ICommerceItemMySuffix } from 'app/shared/model/infinityshoporder/commerce-item-my-suffix.model';

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

export interface ICommerceOrderPaymentMySuffix {
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
  items?: ICommerceItemMySuffix[];
}

export const defaultValue: Readonly<ICommerceOrderPaymentMySuffix> = {};
