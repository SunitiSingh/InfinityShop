import { IISOrderPriceNegotiationMySuffix } from 'app/shared/model/infinityshoporder/is-order-price-negotiation-my-suffix.model';

export interface IISOrderPriceMySuffix {
  id?: number;
  name?: string;
  price?: number;
  iSOrderId?: number;
  negotiations?: IISOrderPriceNegotiationMySuffix[];
}

export const defaultValue: Readonly<IISOrderPriceMySuffix> = {};
