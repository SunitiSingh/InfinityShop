import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ICommerceItem, defaultValue } from 'app/shared/model/infinityshoporder/commerce-item.model';

export const ACTION_TYPES = {
  FETCH_COMMERCEITEM_LIST: 'commerceItem/FETCH_COMMERCEITEM_LIST',
  FETCH_COMMERCEITEM: 'commerceItem/FETCH_COMMERCEITEM',
  CREATE_COMMERCEITEM: 'commerceItem/CREATE_COMMERCEITEM',
  UPDATE_COMMERCEITEM: 'commerceItem/UPDATE_COMMERCEITEM',
  DELETE_COMMERCEITEM: 'commerceItem/DELETE_COMMERCEITEM',
  RESET: 'commerceItem/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ICommerceItem>,
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false
};

export type CommerceItemState = Readonly<typeof initialState>;

// Reducer

export default (state: CommerceItemState = initialState, action): CommerceItemState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_COMMERCEITEM_LIST):
    case REQUEST(ACTION_TYPES.FETCH_COMMERCEITEM):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_COMMERCEITEM):
    case REQUEST(ACTION_TYPES.UPDATE_COMMERCEITEM):
    case REQUEST(ACTION_TYPES.DELETE_COMMERCEITEM):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_COMMERCEITEM_LIST):
    case FAILURE(ACTION_TYPES.FETCH_COMMERCEITEM):
    case FAILURE(ACTION_TYPES.CREATE_COMMERCEITEM):
    case FAILURE(ACTION_TYPES.UPDATE_COMMERCEITEM):
    case FAILURE(ACTION_TYPES.DELETE_COMMERCEITEM):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_COMMERCEITEM_LIST):
      return {
        ...state,
        loading: false,
        totalItems: action.payload.headers['x-total-count'],
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_COMMERCEITEM):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_COMMERCEITEM):
    case SUCCESS(ACTION_TYPES.UPDATE_COMMERCEITEM):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_COMMERCEITEM):
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

const apiUrl = 'infinityshoporder/api/commerce-items';

// Actions

export const getEntities: ICrudGetAllAction<ICommerceItem> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_COMMERCEITEM_LIST,
    payload: axios.get<ICommerceItem>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`)
  };
};

export const getEntity: ICrudGetAction<ICommerceItem> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_COMMERCEITEM,
    payload: axios.get<ICommerceItem>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ICommerceItem> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_COMMERCEITEM,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ICommerceItem> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_COMMERCEITEM,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<ICommerceItem> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_COMMERCEITEM,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
