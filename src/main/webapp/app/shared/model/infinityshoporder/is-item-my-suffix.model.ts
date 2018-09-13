import { Moment } from 'moment';
import { IISShippingContainerMySuffix } from 'app/shared/model/infinityshoporder/is-shipping-container-my-suffix.model';
import { IISOrderPaymentMySuffix } from 'app/shared/model/infinityshoporder/is-order-payment-my-suffix.model';

export interface IISItemMySuffix {
  id?: number;
  skuid?: string;
  quantity?: number;
  creationDate?: Moment;
  updateDate?: Moment;
  iSOrderId?: number;
  priceId?: number;
  shipcontainers?: IISShippingContainerMySuffix[];
  payments?: IISOrderPaymentMySuffix[];
}

export const defaultValue: Readonly<IISItemMySuffix> = {};
