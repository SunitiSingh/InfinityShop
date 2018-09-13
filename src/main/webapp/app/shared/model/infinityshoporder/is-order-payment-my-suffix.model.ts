import { IISItemMySuffix } from 'app/shared/model/infinityshoporder/is-item-my-suffix.model';

export const enum PayStatus {
  INITIAL = 'INITIAL',
  AUTHORIZED = 'AUTHORIZED',
  SETTLED = 'SETTLED',
  AUTH_FAILED = 'AUTH_FAILED',
  SETTLE_FAILED = 'SETTLE_FAILED'
}

export const enum ISPaymentType {
  CARD = 'CARD',
  EPAY = 'EPAY'
}

export interface IISOrderPaymentMySuffix {
  id?: number;
  paystatus?: PayStatus;
  paymentAmount?: number;
  paymentType?: ISPaymentType;
  firstName?: string;
  lastName?: string;
  billingPhone?: string;
  iSOrderId?: number;
  cardId?: number;
  epayId?: number;
  billingAddressId?: number;
  items?: IISItemMySuffix[];
}

export const defaultValue: Readonly<IISOrderPaymentMySuffix> = {};
