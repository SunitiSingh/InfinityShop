import { ICommerceShipPriceNg } from 'app/shared/model/infinityshoporder/commerce-ship-price-ng.model';

export interface ICommerceShipContainerPrice {
  id?: number;
  price?: number;
  ngs?: ICommerceShipPriceNg[];
}

export const defaultValue: Readonly<ICommerceShipContainerPrice> = {};
