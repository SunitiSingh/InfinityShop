import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ICommerceEPay, defaultValue } from 'app/shared/model/infinityshoporder/commerce-e-pay.model';

export const ACTION_TYPES = {
  FETCH_COMMERCEEPAY_LIST: 'commerceEPay/FETCH_COMMERCEEPAY_LIST',
  FETCH_COMMERCEEPAY: 'commerceEPay/FETCH_COMMERCEEPAY',
  CREATE_COMMERCEEPAY: 'commerceEPay/CREATE_COMMERCEEPAY',
  UPDATE_COMMERCEEPAY: 'commerceEPay/UPDATE_COMMERCEEPAY',
  DELETE_COMMERCEEPAY: 'commerceEPay/DELETE_COMMERCEEPAY',
  RESET: 'commerceEPay/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ICommerceEPay>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type CommerceEPayState = Readonly<typeof initialState>;

// Reducer

export default (state: CommerceEPayState = initialState, action): CommerceEPayState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_COMMERCEEPAY_LIST):
    case REQUEST(ACTION_TYPES.FETCH_COMMERCEEPAY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_COMMERCEEPAY):
    case REQUEST(ACTION_TYPES.UPDATE_COMMERCEEPAY):
    case REQUEST(ACTION_TYPES.DELETE_COMMERCEEPAY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_COMMERCEEPAY_LIST):
    case FAILURE(ACTION_TYPES.FETCH_COMMERCEEPAY):
    case FAILURE(ACTION_TYPES.CREATE_COMMERCEEPAY):
    case FAILURE(ACTION_TYPES.UPDATE_COMMERCEEPAY):
    case FAILURE(ACTION_TYPES.DELETE_COMMERCEEPAY):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_COMMERCEEPAY_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_COMMERCEEPAY):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_COMMERCEEPAY):
    case SUCCESS(ACTION_TYPES.UPDATE_COMMERCEEPAY):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_COMMERCEEPAY):
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

const apiUrl = 'infinityshoporder/api/commerce-e-pays';

// Actions

export const getEntities: ICrudGetAllAction<ICommerceEPay> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_COMMERCEEPAY_LIST,
  payload: axios.get<ICommerceEPay>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<ICommerceEPay> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_COMMERCEEPAY,
    payload: axios.get<ICommerceEPay>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ICommerceEPay> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_COMMERCEEPAY,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ICommerceEPay> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_COMMERCEEPAY,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<ICommerceEPay> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_COMMERCEEPAY,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
