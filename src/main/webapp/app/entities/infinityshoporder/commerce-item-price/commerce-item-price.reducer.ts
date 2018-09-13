import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { ICommerceItemPrice, defaultValue } from 'app/shared/model/infinityshoporder/commerce-item-price.model';

export const ACTION_TYPES = {
  FETCH_COMMERCEITEMPRICE_LIST: 'commerceItemPrice/FETCH_COMMERCEITEMPRICE_LIST',
  FETCH_COMMERCEITEMPRICE: 'commerceItemPrice/FETCH_COMMERCEITEMPRICE',
  CREATE_COMMERCEITEMPRICE: 'commerceItemPrice/CREATE_COMMERCEITEMPRICE',
  UPDATE_COMMERCEITEMPRICE: 'commerceItemPrice/UPDATE_COMMERCEITEMPRICE',
  DELETE_COMMERCEITEMPRICE: 'commerceItemPrice/DELETE_COMMERCEITEMPRICE',
  RESET: 'commerceItemPrice/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ICommerceItemPrice>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type CommerceItemPriceState = Readonly<typeof initialState>;

// Reducer

export default (state: CommerceItemPriceState = initialState, action): CommerceItemPriceState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_COMMERCEITEMPRICE_LIST):
    case REQUEST(ACTION_TYPES.FETCH_COMMERCEITEMPRICE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_COMMERCEITEMPRICE):
    case REQUEST(ACTION_TYPES.UPDATE_COMMERCEITEMPRICE):
    case REQUEST(ACTION_TYPES.DELETE_COMMERCEITEMPRICE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_COMMERCEITEMPRICE_LIST):
    case FAILURE(ACTION_TYPES.FETCH_COMMERCEITEMPRICE):
    case FAILURE(ACTION_TYPES.CREATE_COMMERCEITEMPRICE):
    case FAILURE(ACTION_TYPES.UPDATE_COMMERCEITEMPRICE):
    case FAILURE(ACTION_TYPES.DELETE_COMMERCEITEMPRICE):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_COMMERCEITEMPRICE_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_COMMERCEITEMPRICE):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_COMMERCEITEMPRICE):
    case SUCCESS(ACTION_TYPES.UPDATE_COMMERCEITEMPRICE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_COMMERCEITEMPRICE):
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

const apiUrl = 'infinityshoporder/api/commerce-item-prices';

// Actions

export const getEntities: ICrudGetAllAction<ICommerceItemPrice> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_COMMERCEITEMPRICE_LIST,
  payload: axios.get<ICommerceItemPrice>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<ICommerceItemPrice> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_COMMERCEITEMPRICE,
    payload: axios.get<ICommerceItemPrice>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ICommerceItemPrice> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_COMMERCEITEMPRICE,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ICommerceItemPrice> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_COMMERCEITEMPRICE,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<ICommerceItemPrice> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_COMMERCEITEMPRICE,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
