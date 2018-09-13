import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { ICommerceShipContainerPrice, defaultValue } from 'app/shared/model/infinityshoporder/commerce-ship-container-price.model';

export const ACTION_TYPES = {
  FETCH_COMMERCESHIPCONTAINERPRICE_LIST: 'commerceShipContainerPrice/FETCH_COMMERCESHIPCONTAINERPRICE_LIST',
  FETCH_COMMERCESHIPCONTAINERPRICE: 'commerceShipContainerPrice/FETCH_COMMERCESHIPCONTAINERPRICE',
  CREATE_COMMERCESHIPCONTAINERPRICE: 'commerceShipContainerPrice/CREATE_COMMERCESHIPCONTAINERPRICE',
  UPDATE_COMMERCESHIPCONTAINERPRICE: 'commerceShipContainerPrice/UPDATE_COMMERCESHIPCONTAINERPRICE',
  DELETE_COMMERCESHIPCONTAINERPRICE: 'commerceShipContainerPrice/DELETE_COMMERCESHIPCONTAINERPRICE',
  RESET: 'commerceShipContainerPrice/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ICommerceShipContainerPrice>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type CommerceShipContainerPriceState = Readonly<typeof initialState>;

// Reducer

export default (state: CommerceShipContainerPriceState = initialState, action): CommerceShipContainerPriceState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_COMMERCESHIPCONTAINERPRICE_LIST):
    case REQUEST(ACTION_TYPES.FETCH_COMMERCESHIPCONTAINERPRICE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_COMMERCESHIPCONTAINERPRICE):
    case REQUEST(ACTION_TYPES.UPDATE_COMMERCESHIPCONTAINERPRICE):
    case REQUEST(ACTION_TYPES.DELETE_COMMERCESHIPCONTAINERPRICE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_COMMERCESHIPCONTAINERPRICE_LIST):
    case FAILURE(ACTION_TYPES.FETCH_COMMERCESHIPCONTAINERPRICE):
    case FAILURE(ACTION_TYPES.CREATE_COMMERCESHIPCONTAINERPRICE):
    case FAILURE(ACTION_TYPES.UPDATE_COMMERCESHIPCONTAINERPRICE):
    case FAILURE(ACTION_TYPES.DELETE_COMMERCESHIPCONTAINERPRICE):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_COMMERCESHIPCONTAINERPRICE_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_COMMERCESHIPCONTAINERPRICE):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_COMMERCESHIPCONTAINERPRICE):
    case SUCCESS(ACTION_TYPES.UPDATE_COMMERCESHIPCONTAINERPRICE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_COMMERCESHIPCONTAINERPRICE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {}
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

const apiUrl = 'infinityshoporder/api/commerce-ship-container-prices';

// Actions

export const getEntities: ICrudGetAllAction<ICommerceShipContainerPrice> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_COMMERCESHIPCONTAINERPRICE_LIST,
  payload: axios.get<ICommerceShipContainerPrice>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<ICommerceShipContainerPrice> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_COMMERCESHIPCONTAINERPRICE,
    payload: axios.get<ICommerceShipContainerPrice>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ICommerceShipContainerPrice> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_COMMERCESHIPCONTAINERPRICE,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ICommerceShipContainerPrice> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_COMMERCESHIPCONTAINERPRICE,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<ICommerceShipContainerPrice> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_COMMERCESHIPCONTAINERPRICE,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
