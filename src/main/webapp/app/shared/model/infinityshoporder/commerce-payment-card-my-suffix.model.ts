import { Moment } from 'moment';

export interface ICommercePaymentCardMySuffix {
  id?: number;
  cardType?: string;
  cardNumber?: string;
  expMonth?: number;
  expYear?: number;
  createDate?: Moment;
  updateDate?: Moment;
}

export const defaultValue: Readonly<ICommercePaymentCardMySuffix> = {};
