import { ICommerceOrderPriceNgMySuffix } from 'app/shared/model/infinityshoporder/commerce-order-price-ng-my-suffix.model';

export interface ICommerceOrderPriceMySuffix {
  id?: number;
  name?: string;
  price?: number;
  commerceOrderId?: number;
  ngs?: ICommerceOrderPriceNgMySuffix[];
}

export const defaultValue: Readonly<ICommerceOrderPriceMySuffix> = {};
