import { Moment } from 'moment';

export interface IISEPayMySuffix {
  id?: number;
  ePayType?: string;
  ePayToken?: string;
  createDate?: Moment;
  updateDate?: Moment;
}

export const defaultValue: Readonly<IISEPayMySuffix> = {};
