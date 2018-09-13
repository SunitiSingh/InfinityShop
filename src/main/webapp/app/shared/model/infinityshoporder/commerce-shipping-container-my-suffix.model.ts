import { Moment } from 'moment';
import { ICommerceItemMySuffix } from 'app/shared/model/infinityshoporder/commerce-item-my-suffix.model';

export const enum CommerceShipStatus {
  INIT = 'INIT',
  DROPPED = 'DROPPED',
  CANT_SHIP = 'CANT_SHIP',
  PARTIALLY_SHIPPED = 'PARTIALLY_SHIPPED',
  SHIPPED = 'SHIPPED'
}

export interface ICommerceShippingContainerMySuffix {
  id?: number;
  shipstatus?: CommerceShipStatus;
  carrier?: string;
  creationDate?: Moment;
  updateDate?: Moment;
  commerceOrderId?: number;
  priceId?: number;
  items?: ICommerceItemMySuffix[];
}

export const defaultValue: Readonly<ICommerceShippingContainerMySuffix> = {};
