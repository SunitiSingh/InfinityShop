import { ICommerceOrderPriceNg } from 'app/shared/model/infinityshoporder/commerce-order-price-ng.model';

export interface ICommerceOrderPrice {
  id?: number;
  name?: string;
  price?: number;
  commerceOrderId?: number;
  ngs?: ICommerceOrderPriceNg[];
}

export const defaultValue: Readonly<ICommerceOrderPrice> = {};
