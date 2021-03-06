import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ICommerceOrder, defaultValue } from 'app/shared/model/infinityshoporder/commerce-order.model';

export const ACTION_TYPES = {
  FETCH_COMMERCEORDER_LIST: 'commerceOrder/FETCH_COMMERCEORDER_LIST',
  FETCH_COMMERCEORDER: 'commerceOrder/FETCH_COMMERCEORDER',
  CREATE_COMMERCEORDER: 'commerceOrder/CREATE_COMMERCEORDER',
  UPDATE_COMMERCEORDER: 'commerceOrder/UPDATE_COMMERCEORDER',
  DELETE_COMMERCEORDER: 'commerceOrder/DELETE_COMMERCEORDER',
  RESET: 'commerceOrder/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ICommerceOrder>,
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false
};

export type CommerceOrderState = Readonly<typeof initialState>;

// Reducer

export default (state: CommerceOrderState = initialState, action): CommerceOrderState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_COMMERCEORDER_LIST):
    case REQUEST(ACTION_TYPES.FETCH_COMMERCEORDER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_COMMERCEORDER):
    case REQUEST(ACTION_TYPES.UPDATE_COMMERCEORDER):
    case REQUEST(ACTION_TYPES.DELETE_COMMERCEORDER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_COMMERCEORDER_LIST):
    case FAILURE(ACTION_TYPES.FETCH_COMMERCEORDER):
    case FAILURE(ACTION_TYPES.CREATE_COMMERCEORDER):
    case FAILURE(ACTION_TYPES.UPDATE_COMMERCEORDER):
    case FAILURE(ACTION_TYPES.DELETE_COMMERCEORDER):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_COMMERCEORDER_LIST):
      return {
        ...state,
        loading: false,
        totalItems: action.payload.headers['x-total-count'],
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_COMMERCEORDER):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_COMMERCEORDER):
    case SUCCESS(ACTION_TYPES.UPDATE_COMMERCEORDER):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_COMMERCEORDER):
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

const apiUrl = 'infinityshoporder/api/commerce-orders';

// Actions

export const getEntities: ICrudGetAllAction<ICommerceOrder> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_COMMERCEORDER_LIST,
    payload: axios.get<ICommerceOrder>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`)
  };
};

export const getEntity: ICrudGetAction<ICommerceOrder> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_COMMERCEORDER,
    payload: axios.get<ICommerceOrder>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ICommerceOrder> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_COMMERCEORDER,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ICommerceOrder> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_COMMERCEORDER,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<ICommerceOrder> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_COMMERCEORDER,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
