import { Moment } from 'moment';
import { ICommerceShippingContainerMySuffix } from 'app/shared/model/infinityshoporder/commerce-shipping-container-my-suffix.model';
import { ICommerceOrderPaymentMySuffix } from 'app/shared/model/infinityshoporder/commerce-order-payment-my-suffix.model';

export interface ICommerceItemMySuffix {
  id?: number;
  skuid?: string;
  quantity?: number;
  creationDate?: Moment;
  updateDate?: Moment;
  commerceOrderId?: number;
  priceId?: number;
  shipcontainers?: ICommerceShippingContainerMySuffix[];
  payments?: ICommerceOrderPaymentMySuffix[];
}

export const defaultValue: Readonly<ICommerceItemMySuffix> = {};
