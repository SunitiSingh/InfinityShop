import { Moment } from 'moment';

export interface ICommerceEPay {
  id?: number;
  ePayType?: string;
  ePayToken?: string;
  createDate?: Moment;
  updateDate?: Moment;
}

export const defaultValue: Readonly<ICommerceEPay> = {};
