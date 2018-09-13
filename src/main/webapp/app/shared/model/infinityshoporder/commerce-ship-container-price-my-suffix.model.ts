import { ICommerceShipPriceNgMySuffix } from 'app/shared/model/infinityshoporder/commerce-ship-price-ng-my-suffix.model';

export interface ICommerceShipContainerPriceMySuffix {
  id?: number;
  price?: number;
  ngs?: ICommerceShipPriceNgMySuffix[];
}

export const defaultValue: Readonly<ICommerceShipContainerPriceMySuffix> = {};
