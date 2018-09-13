import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { ICommerceOrderPriceNg, defaultValue } from 'app/shared/model/infinityshoporder/commerce-order-price-ng.model';

export const ACTION_TYPES = {
  FETCH_COMMERCEORDERPRICENG_LIST: 'commerceOrderPriceNg/FETCH_COMMERCEORDERPRICENG_LIST',
  FETCH_COMMERCEORDERPRICENG: 'commerceOrderPriceNg/FETCH_COMMERCEORDERPRICENG',
  CREATE_COMMERCEORDERPRICENG: 'commerceOrderPriceNg/CREATE_COMMERCEORDERPRICENG',
  UPDATE_COMMERCEORDERPRICENG: 'commerceOrderPriceNg/UPDATE_COMMERCEORDERPRICENG',
  DELETE_COMMERCEORDERPRICENG: 'commerceOrderPriceNg/DELETE_COMMERCEORDERPRICENG',
  RESET: 'commerceOrderPriceNg/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ICommerceOrderPriceNg>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type CommerceOrderPriceNgState = Readonly<typeof initialState>;

// Reducer

export default (state: CommerceOrderPriceNgState = initialState, action): CommerceOrderPriceNgState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_COMMERCEORDERPRICENG_LIST):
    case REQUEST(ACTION_TYPES.FETCH_COMMERCEORDERPRICENG):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_COMMERCEORDERPRICENG):
    case REQUEST(ACTION_TYPES.UPDATE_COMMERCEORDERPRICENG):
    case REQUEST(ACTION_TYPES.DELETE_COMMERCEORDERPRICENG):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_COMMERCEORDERPRICENG_LIST):
    case FAILURE(ACTION_TYPES.FETCH_COMMERCEORDERPRICENG):
    case FAILURE(ACTION_TYPES.CREATE_COMMERCEORDERPRICENG):
    case FAILURE(ACTION_TYPES.UPDATE_COMMERCEORDERPRICENG):
    case FAILURE(ACTION_TYPES.DELETE_COMMERCEORDERPRICENG):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_COMMERCEORDERPRICENG_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_COMMERCEORDERPRICENG):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_COMMERCEORDERPRICENG):
    case SUCCESS(ACTION_TYPES.UPDATE_COMMERCEORDERPRICENG):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_COMMERCEORDERPRICENG):
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

const apiUrl = 'infinityshoporder/api/commerce-order-price-ngs';

// Actions

export const getEntities: ICrudGetAllAction<ICommerceOrderPriceNg> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_COMMERCEORDERPRICENG_LIST,
  payload: axios.get<ICommerceOrderPriceNg>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<ICommerceOrderPriceNg> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_COMMERCEORDERPRICENG,
    payload: axios.get<ICommerceOrderPriceNg>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ICommerceOrderPriceNg> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_COMMERCEORDERPRICENG,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ICommerceOrderPriceNg> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_COMMERCEORDERPRICENG,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<ICommerceOrderPriceNg> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_COMMERCEORDERPRICENG,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
