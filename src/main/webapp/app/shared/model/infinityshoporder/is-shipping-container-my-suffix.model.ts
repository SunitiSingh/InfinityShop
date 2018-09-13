import { Moment } from 'moment';
import { IISItemMySuffix } from 'app/shared/model/infinityshoporder/is-item-my-suffix.model';

export const enum ISShipStatus {
  INIT = 'INIT',
  DROPPED = 'DROPPED',
  CANT_SHIP = 'CANT_SHIP',
  PARTIALLY_SHIPPED = 'PARTIALLY_SHIPPED',
  SHIPPED = 'SHIPPED'
}

export interface IISShippingContainerMySuffix {
  id?: number;
  shipstatus?: ISShipStatus;
  carrier?: string;
  creationDate?: Moment;
  updateDate?: Moment;
  iSOrderId?: number;
  priceId?: number;
  items?: IISItemMySuffix[];
}

export const defaultValue: Readonly<IISShippingContainerMySuffix> = {};
