import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ICommerceShippingContainer, defaultValue } from 'app/shared/model/infinityshoporder/commerce-shipping-container.model';

export const ACTION_TYPES = {
  FETCH_COMMERCESHIPPINGCONTAINER_LIST: 'commerceShippingContainer/FETCH_COMMERCESHIPPINGCONTAINER_LIST',
  FETCH_COMMERCESHIPPINGCONTAINER: 'commerceShippingContainer/FETCH_COMMERCESHIPPINGCONTAINER',
  CREATE_COMMERCESHIPPINGCONTAINER: 'commerceShippingContainer/CREATE_COMMERCESHIPPINGCONTAINER',
  UPDATE_COMMERCESHIPPINGCONTAINER: 'commerceShippingContainer/UPDATE_COMMERCESHIPPINGCONTAINER',
  DELETE_COMMERCESHIPPINGCONTAINER: 'commerceShippingContainer/DELETE_COMMERCESHIPPINGCONTAINER',
  RESET: 'commerceShippingContainer/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ICommerceShippingContainer>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type CommerceShippingContainerState = Readonly<typeof initialState>;

// Reducer

export default (state: CommerceShippingContainerState = initialState, action): CommerceShippingContainerState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_COMMERCESHIPPINGCONTAINER_LIST):
    case REQUEST(ACTION_TYPES.FETCH_COMMERCESHIPPINGCONTAINER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_COMMERCESHIPPINGCONTAINER):
    case REQUEST(ACTION_TYPES.UPDATE_COMMERCESHIPPINGCONTAINER):
    case REQUEST(ACTION_TYPES.DELETE_COMMERCESHIPPINGCONTAINER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_COMMERCESHIPPINGCONTAINER_LIST):
    case FAILURE(ACTION_TYPES.FETCH_COMMERCESHIPPINGCONTAINER):
    case FAILURE(ACTION_TYPES.CREATE_COMMERCESHIPPINGCONTAINER):
    case FAILURE(ACTION_TYPES.UPDATE_COMMERCESHIPPINGCONTAINER):
    case FAILURE(ACTION_TYPES.DELETE_COMMERCESHIPPINGCONTAINER):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_COMMERCESHIPPINGCONTAINER_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_COMMERCESHIPPINGCONTAINER):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_COMMERCESHIPPINGCONTAINER):
    case SUCCESS(ACTION_TYPES.UPDATE_COMMERCESHIPPINGCONTAINER):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_COMMERCESHIPPINGCONTAINER):
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

const apiUrl = 'infinityshoporder/api/commerce-shipping-containers';

// Actions

export const getEntities: ICrudGetAllAction<ICommerceShippingContainer> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_COMMERCESHIPPINGCONTAINER_LIST,
  payload: axios.get<ICommerceShippingContainer>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<ICommerceShippingContainer> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_COMMERCESHIPPINGCONTAINER,
    payload: axios.get<ICommerceShippingContainer>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ICommerceShippingContainer> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_COMMERCESHIPPINGCONTAINER,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ICommerceShippingContainer> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_COMMERCESHIPPINGCONTAINER,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<ICommerceShippingContainer> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_COMMERCESHIPPINGCONTAINER,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
