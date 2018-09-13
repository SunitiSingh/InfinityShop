import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ICommerceBillingAddress, defaultValue } from 'app/shared/model/infinityshoporder/commerce-billing-address.model';

export const ACTION_TYPES = {
  FETCH_COMMERCEBILLINGADDRESS_LIST: 'commerceBillingAddress/FETCH_COMMERCEBILLINGADDRESS_LIST',
  FETCH_COMMERCEBILLINGADDRESS: 'commerceBillingAddress/FETCH_COMMERCEBILLINGADDRESS',
  CREATE_COMMERCEBILLINGADDRESS: 'commerceBillingAddress/CREATE_COMMERCEBILLINGADDRESS',
  UPDATE_COMMERCEBILLINGADDRESS: 'commerceBillingAddress/UPDATE_COMMERCEBILLINGADDRESS',
  DELETE_COMMERCEBILLINGADDRESS: 'commerceBillingAddress/DELETE_COMMERCEBILLINGADDRESS',
  RESET: 'commerceBillingAddress/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ICommerceBillingAddress>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type CommerceBillingAddressState = Readonly<typeof initialState>;

// Reducer

export default (state: CommerceBillingAddressState = initialState, action): CommerceBillingAddressState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_COMMERCEBILLINGADDRESS_LIST):
    case REQUEST(ACTION_TYPES.FETCH_COMMERCEBILLINGADDRESS):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_COMMERCEBILLINGADDRESS):
    case REQUEST(ACTION_TYPES.UPDATE_COMMERCEBILLINGADDRESS):
    case REQUEST(ACTION_TYPES.DELETE_COMMERCEBILLINGADDRESS):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_COMMERCEBILLINGADDRESS_LIST):
    case FAILURE(ACTION_TYPES.FETCH_COMMERCEBILLINGADDRESS):
    case FAILURE(ACTION_TYPES.CREATE_COMMERCEBILLINGADDRESS):
    case FAILURE(ACTION_TYPES.UPDATE_COMMERCEBILLINGADDRESS):
    case FAILURE(ACTION_TYPES.DELETE_COMMERCEBILLINGADDRESS):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_COMMERCEBILLINGADDRESS_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_COMMERCEBILLINGADDRESS):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_COMMERCEBILLINGADDRESS):
    case SUCCESS(ACTION_TYPES.UPDATE_COMMERCEBILLINGADDRESS):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_COMMERCEBILLINGADDRESS):
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

const apiUrl = 'infinityshoporder/api/commerce-billing-addresses';

// Actions

export const getEntities: ICrudGetAllAction<ICommerceBillingAddress> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_COMMERCEBILLINGADDRESS_LIST,
  payload: axios.get<ICommerceBillingAddress>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<ICommerceBillingAddress> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_COMMERCEBILLINGADDRESS,
    payload: axios.get<ICommerceBillingAddress>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ICommerceBillingAddress> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_COMMERCEBILLINGADDRESS,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ICommerceBillingAddress> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_COMMERCEBILLINGADDRESS,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<ICommerceBillingAddress> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_COMMERCEBILLINGADDRESS,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
