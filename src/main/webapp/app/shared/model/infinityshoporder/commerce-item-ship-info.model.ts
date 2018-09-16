export const enum ItemShipStatus {
  INIT = 'INIT',
  SHIPPED = 'SHIPPED',
  UNAVAILABLE = 'UNAVAILABLE'
}

export interface ICommerceItemShipInfo {
  id?: number;
  status?: ItemShipStatus;
  quantity?: number;
  shipContainerId?: number;
}

export const defaultValue: Readonly<ICommerceItemShipInfo> = {};
