import { Moment } from 'moment';

export interface IISBillingAddressMySuffix {
  id?: number;
  address1?: string;
  address2?: string;
  city?: string;
  postalcode?: string;
  createDate?: Moment;
  updateDate?: Moment;
}

export const defaultValue: Readonly<IISBillingAddressMySuffix> = {};
