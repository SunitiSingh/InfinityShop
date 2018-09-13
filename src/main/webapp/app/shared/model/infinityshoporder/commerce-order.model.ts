import { Moment } from 'moment';
import { ICommerceOrderPrice } from 'app/shared/model/infinityshoporder/commerce-order-price.model';
import { ICommerceShippingContainer } from 'app/shared/model/infinityshoporder/commerce-shipping-container.model';
import { ICommerceItem } from 'app/shared/model/infinityshoporder/commerce-item.model';
import { ICommerceOrderPayment } from 'app/shared/model/infinityshoporder/commerce-order-payment.model';

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

export interface ICommerceOrder {
  id?: number;
  status?: OrderStatus;
  custid?: string;
  creationDate?: Moment;
  placedDate?: Moment;
  updateDate?: Moment;
  prices?: ICommerceOrderPrice[];
  shipcontainers?: ICommerceShippingContainer[];
  items?: ICommerceItem[];
  payments?: ICommerceOrderPayment[];
}

export const defaultValue: Readonly<ICommerceOrder> = {};
