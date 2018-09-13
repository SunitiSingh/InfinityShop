import { Moment } from 'moment';
import { ICommerceOrderPriceMySuffix } from 'app/shared/model/infinityshoporder/commerce-order-price-my-suffix.model';
import { ICommerceShippingContainerMySuffix } from 'app/shared/model/infinityshoporder/commerce-shipping-container-my-suffix.model';
import { ICommerceItemMySuffix } from 'app/shared/model/infinityshoporder/commerce-item-my-suffix.model';
import { ICommerceOrderPaymentMySuffix } from 'app/shared/model/infinityshoporder/commerce-order-payment-my-suffix.model';

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

export interface ICommerceOrderMySuffix {
  id?: number;
  status?: OrderStatus;
  custid?: string;
  creationDate?: Moment;
  placedDate?: Moment;
  updateDate?: Moment;
  prices?: ICommerceOrderPriceMySuffix[];
  shipcontainers?: ICommerceShippingContainerMySuffix[];
  items?: ICommerceItemMySuffix[];
  payments?: ICommerceOrderPaymentMySuffix[];
}

export const defaultValue: Readonly<ICommerceOrderMySuffix> = {};
