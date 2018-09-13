import { IISShipPriceNegotiationMySuffix } from 'app/shared/model/infinityshoporder/is-ship-price-negotiation-my-suffix.model';

export interface IISShipContainerPriceMySuffix {
  id?: number;
  price?: number;
  negotiations?: IISShipPriceNegotiationMySuffix[];
}

export const defaultValue: Readonly<IISShipContainerPriceMySuffix> = {};
