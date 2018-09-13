import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { ICommerceShipPriceNg, defaultValue } from 'app/shared/model/infinityshoporder/commerce-ship-price-ng.model';

export const ACTION_TYPES = {
  FETCH_COMMERCESHIPPRICENG_LIST: 'commerceShipPriceNg/FETCH_COMMERCESHIPPRICENG_LIST',
  FETCH_COMMERCESHIPPRICENG: 'commerceShipPriceNg/FETCH_COMMERCESHIPPRICENG',
  CREATE_COMMERCESHIPPRICENG: 'commerceShipPriceNg/CREATE_COMMERCESHIPPRICENG',
  UPDATE_COMMERCESHIPPRICENG: 'commerceShipPriceNg/UPDATE_COMMERCESHIPPRICENG',
  DELETE_COMMERCESHIPPRICENG: 'commerceShipPriceNg/DELETE_COMMERCESHIPPRICENG',
  RESET: 'commerceShipPriceNg/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ICommerceShipPriceNg>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type CommerceShipPriceNgState = Readonly<typeof initialState>;

// Reducer

export default (state: CommerceShipPriceNgState = initialState, action): CommerceShipPriceNgState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_COMMERCESHIPPRICENG_LIST):
    case REQUEST(ACTION_TYPES.FETCH_COMMERCESHIPPRICENG):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_COMMERCESHIPPRICENG):
    case REQUEST(ACTION_TYPES.UPDATE_COMMERCESHIPPRICENG):
    case REQUEST(ACTION_TYPES.DELETE_COMMERCESHIPPRICENG):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_COMMERCESHIPPRICENG_LIST):
    case FAILURE(ACTION_TYPES.FETCH_COMMERCESHIPPRICENG):
    case FAILURE(ACTION_TYPES.CREATE_COMMERCESHIPPRICENG):
    case FAILURE(ACTION_TYPES.UPDATE_COMMERCESHIPPRICENG):
    case FAILURE(ACTION_TYPES.DELETE_COMMERCESHIPPRICENG):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_COMMERCESHIPPRICENG_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_COMMERCESHIPPRICENG):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_COMMERCESHIPPRICENG):
    case SUCCESS(ACTION_TYPES.UPDATE_COMMERCESHIPPRICENG):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_COMMERCESHIPPRICENG):
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

const apiUrl = 'infinityshoporder/api/commerce-ship-price-ngs';

// Actions

export const getEntities: ICrudGetAllAction<ICommerceShipPriceNg> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_COMMERCESHIPPRICENG_LIST,
  payload: axios.get<ICommerceShipPriceNg>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<ICommerceShipPriceNg> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_COMMERCESHIPPRICENG,
    payload: axios.get<ICommerceShipPriceNg>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ICommerceShipPriceNg> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_COMMERCESHIPPRICENG,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ICommerceShipPriceNg> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_COMMERCESHIPPRICENG,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<ICommerceShipPriceNg> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_COMMERCESHIPPRICENG,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
