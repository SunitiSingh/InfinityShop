import { ICommerceItemPriceNgMySuffix } from 'app/shared/model/infinityshoporder/commerce-item-price-ng-my-suffix.model';

export interface ICommerceItemPriceMySuffix {
  id?: number;
  price?: number;
  ngs?: ICommerceItemPriceNgMySuffix[];
}

export const defaultValue: Readonly<ICommerceItemPriceMySuffix> = {};
