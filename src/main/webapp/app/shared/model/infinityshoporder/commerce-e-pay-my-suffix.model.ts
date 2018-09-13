import { Moment } from 'moment';

export interface ICommerceEPayMySuffix {
  id?: number;
  ePayType?: string;
  ePayToken?: string;
  createDate?: Moment;
  updateDate?: Moment;
}

export const defaultValue: Readonly<ICommerceEPayMySuffix> = {};
