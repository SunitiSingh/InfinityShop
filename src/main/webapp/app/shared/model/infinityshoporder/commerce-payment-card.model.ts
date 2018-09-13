import { Moment } from 'moment';

export interface ICommercePaymentCard {
  id?: number;
  cardType?: string;
  cardNumber?: string;
  expMonth?: number;
  expYear?: number;
  createDate?: Moment;
  updateDate?: Moment;
}

export const defaultValue: Readonly<ICommercePaymentCard> = {};
