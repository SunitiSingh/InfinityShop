import { Moment } from 'moment';
import { ICommerceItem } from 'app/shared/model/infinityshoporder/commerce-item.model';

export const enum CommerceShipStatus {
  INIT = 'INIT',
  DROPPED = 'DROPPED',
  CANT_SHIP = 'CANT_SHIP',
  PARTIALLY_SHIPPED = 'PARTIALLY_SHIPPED',
  SHIPPED = 'SHIPPED'
}

export interface ICommerceShippingContainer {
  id?: number;
  shipstatus?: CommerceShipStatus;
  carrier?: string;
  creationDate?: Moment;
  updateDate?: Moment;
  commerceOrderId?: number;
  priceId?: number;
  items?: ICommerceItem[];
}

export const defaultValue: Readonly<ICommerceShippingContainer> = {};
