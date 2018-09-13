import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { ICommerceOrderPrice, defaultValue } from 'app/shared/model/infinityshoporder/commerce-order-price.model';

export const ACTION_TYPES = {
  FETCH_COMMERCEORDERPRICE_LIST: 'commerceOrderPrice/FETCH_COMMERCEORDERPRICE_LIST',
  FETCH_COMMERCEORDERPRICE: 'commerceOrderPrice/FETCH_COMMERCEORDERPRICE',
  CREATE_COMMERCEORDERPRICE: 'commerceOrderPrice/CREATE_COMMERCEORDERPRICE',
  UPDATE_COMMERCEORDERPRICE: 'commerceOrderPrice/UPDATE_COMMERCEORDERPRICE',
  DELETE_COMMERCEORDERPRICE: 'commerceOrderPrice/DELETE_COMMERCEORDERPRICE',
  RESET: 'commerceOrderPrice/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ICommerceOrderPrice>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type CommerceOrderPriceState = Readonly<typeof initialState>;

// Reducer

export default (state: CommerceOrderPriceState = initialState, action): CommerceOrderPriceState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_COMMERCEORDERPRICE_LIST):
    case REQUEST(ACTION_TYPES.FETCH_COMMERCEORDERPRICE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_COMMERCEORDERPRICE):
    case REQUEST(ACTION_TYPES.UPDATE_COMMERCEORDERPRICE):
    case REQUEST(ACTION_TYPES.DELETE_COMMERCEORDERPRICE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_COMMERCEORDERPRICE_LIST):
    case FAILURE(ACTION_TYPES.FETCH_COMMERCEORDERPRICE):
    case FAILURE(ACTION_TYPES.CREATE_COMMERCEORDERPRICE):
    case FAILURE(ACTION_TYPES.UPDATE_COMMERCEORDERPRICE):
    case FAILURE(ACTION_TYPES.DELETE_COMMERCEORDERPRICE):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_COMMERCEORDERPRICE_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_COMMERCEORDERPRICE):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_COMMERCEORDERPRICE):
    case SUCCESS(ACTION_TYPES.UPDATE_COMMERCEORDERPRICE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_COMMERCEORDERPRICE):
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

const apiUrl = 'infinityshoporder/api/commerce-order-prices';

// Actions

export const getEntities: ICrudGetAllAction<ICommerceOrderPrice> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_COMMERCEORDERPRICE_LIST,
  payload: axios.get<ICommerceOrderPrice>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<ICommerceOrderPrice> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_COMMERCEORDERPRICE,
    payload: axios.get<ICommerceOrderPrice>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ICommerceOrderPrice> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_COMMERCEORDERPRICE,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ICommerceOrderPrice> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_COMMERCEORDERPRICE,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<ICommerceOrderPrice> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_COMMERCEORDERPRICE,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
