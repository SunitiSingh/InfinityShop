import { Moment } from 'moment';
import { ICommerceShippingContainer } from 'app/shared/model/infinityshoporder/commerce-shipping-container.model';
import { ICommerceOrderPayment } from 'app/shared/model/infinityshoporder/commerce-order-payment.model';

export interface ICommerceItem {
  id?: number;
  skuid?: string;
  quantity?: number;
  creationDate?: Moment;
  updateDate?: Moment;
  commerceOrderId?: number;
  priceId?: number;
  shipcontainers?: ICommerceShippingContainer[];
  payments?: ICommerceOrderPayment[];
}

export const defaultValue: Readonly<ICommerceItem> = {};
