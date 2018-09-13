import { Moment } from 'moment';
import { IISOrderPriceMySuffix } from 'app/shared/model/infinityshoporder/is-order-price-my-suffix.model';
import { IISShippingContainerMySuffix } from 'app/shared/model/infinityshoporder/is-shipping-container-my-suffix.model';
import { IISItemMySuffix } from 'app/shared/model/infinityshoporder/is-item-my-suffix.model';
import { IISOrderPaymentMySuffix } from 'app/shared/model/infinityshoporder/is-order-payment-my-suffix.model';

export const enum OrderStatus {
  CART = 'CART',
  PLACED = 'PLACED',
  SHIPPED = 'SHIPPED',
  PARTIALLY_SHIPPED = 'PARTIALLY_SHIPPED',
  SETTLED = 'SETTLED',
  RETURNED = 'RETURNED',
  PARTIALLY_RETURNED = 'PARTIALLY_RETURNED',
  CLOSED = 'CLOSED'
}

export interface IISOrderMySuffix {
  id?: number;
  status?: OrderStatus;
  custid?: string;
  creationDate?: Moment;
  placedDate?: Moment;
  updateDate?: Moment;
  prices?: IISOrderPriceMySuffix[];
  shipcontainers?: IISShippingContainerMySuffix[];
  items?: IISItemMySuffix[];
  payments?: IISOrderPaymentMySuffix[];
}

export const defaultValue: Readonly<IISOrderMySuffix> = {};
