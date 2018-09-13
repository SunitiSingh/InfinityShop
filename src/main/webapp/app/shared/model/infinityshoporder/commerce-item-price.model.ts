import { ICommerceItemPriceNg } from 'app/shared/model/infinityshoporder/commerce-item-price-ng.model';

export interface ICommerceItemPrice {
  id?: number;
  price?: number;
  ngs?: ICommerceItemPriceNg[];
}

export const defaultValue: Readonly<ICommerceItemPrice> = {};
