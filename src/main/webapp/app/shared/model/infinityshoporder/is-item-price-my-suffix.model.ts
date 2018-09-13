import { IISItemPriceNegotiationMySuffix } from 'app/shared/model/infinityshoporder/is-item-price-negotiation-my-suffix.model';

export interface IISItemPriceMySuffix {
  id?: number;
  price?: number;
  negotiations?: IISItemPriceNegotiationMySuffix[];
}

export const defaultValue: Readonly<IISItemPriceMySuffix> = {};
