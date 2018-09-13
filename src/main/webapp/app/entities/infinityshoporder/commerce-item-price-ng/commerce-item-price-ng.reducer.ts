import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { ICommerceItemPriceNg, defaultValue } from 'app/shared/model/infinityshoporder/commerce-item-price-ng.model';

export const ACTION_TYPES = {
  FETCH_COMMERCEITEMPRICENG_LIST: 'commerceItemPriceNg/FETCH_COMMERCEITEMPRICENG_LIST',
  FETCH_COMMERCEITEMPRICENG: 'commerceItemPriceNg/FETCH_COMMERCEITEMPRICENG',
  CREATE_COMMERCEITEMPRICENG: 'commerceItemPriceNg/CREATE_COMMERCEITEMPRICENG',
  UPDATE_COMMERCEITEMPRICENG: 'commerceItemPriceNg/UPDATE_COMMERCEITEMPRICENG',
  DELETE_COMMERCEITEMPRICENG: 'commerceItemPriceNg/DELETE_COMMERCEITEMPRICENG',
  RESET: 'commerceItemPriceNg/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ICommerceItemPriceNg>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type CommerceItemPriceNgState = Readonly<typeof initialState>;

// Reducer

export default (state: CommerceItemPriceNgState = initialState, action): CommerceItemPriceNgState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_COMMERCEITEMPRICENG_LIST):
    case REQUEST(ACTION_TYPES.FETCH_COMMERCEITEMPRICENG):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_COMMERCEITEMPRICENG):
    case REQUEST(ACTION_TYPES.UPDATE_COMMERCEITEMPRICENG):
    case REQUEST(ACTION_TYPES.DELETE_COMMERCEITEMPRICENG):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_COMMERCEITEMPRICENG_LIST):
    case FAILURE(ACTION_TYPES.FETCH_COMMERCEITEMPRICENG):
    case FAILURE(ACTION_TYPES.CREATE_COMMERCEITEMPRICENG):
    case FAILURE(ACTION_TYPES.UPDATE_COMMERCEITEMPRICENG):
    case FAILURE(ACTION_TYPES.DELETE_COMMERCEITEMPRICENG):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_COMMERCEITEMPRICENG_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_COMMERCEITEMPRICENG):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_COMMERCEITEMPRICENG):
    case SUCCESS(ACTION_TYPES.UPDATE_COMMERCEITEMPRICENG):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_COMMERCEITEMPRICENG):
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

const apiUrl = 'infinityshoporder/api/commerce-item-price-ngs';

// Actions

export const getEntities: ICrudGetAllAction<ICommerceItemPriceNg> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_COMMERCEITEMPRICENG_LIST,
  payload: axios.get<ICommerceItemPriceNg>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<ICommerceItemPriceNg> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_COMMERCEITEMPRICENG,
    payload: axios.get<ICommerceItemPriceNg>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ICommerceItemPriceNg> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_COMMERCEITEMPRICENG,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ICommerceItemPriceNg> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_COMMERCEITEMPRICENG,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<ICommerceItemPriceNg> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_COMMERCEITEMPRICENG,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
