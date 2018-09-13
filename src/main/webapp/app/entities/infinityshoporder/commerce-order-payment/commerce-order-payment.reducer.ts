import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { ICommerceOrderPayment, defaultValue } from 'app/shared/model/infinityshoporder/commerce-order-payment.model';

export const ACTION_TYPES = {
  FETCH_COMMERCEORDERPAYMENT_LIST: 'commerceOrderPayment/FETCH_COMMERCEORDERPAYMENT_LIST',
  FETCH_COMMERCEORDERPAYMENT: 'commerceOrderPayment/FETCH_COMMERCEORDERPAYMENT',
  CREATE_COMMERCEORDERPAYMENT: 'commerceOrderPayment/CREATE_COMMERCEORDERPAYMENT',
  UPDATE_COMMERCEORDERPAYMENT: 'commerceOrderPayment/UPDATE_COMMERCEORDERPAYMENT',
  DELETE_COMMERCEORDERPAYMENT: 'commerceOrderPayment/DELETE_COMMERCEORDERPAYMENT',
  RESET: 'commerceOrderPayment/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ICommerceOrderPayment>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type CommerceOrderPaymentState = Readonly<typeof initialState>;

// Reducer

export default (state: CommerceOrderPaymentState = initialState, action): CommerceOrderPaymentState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_COMMERCEORDERPAYMENT_LIST):
    case REQUEST(ACTION_TYPES.FETCH_COMMERCEORDERPAYMENT):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_COMMERCEORDERPAYMENT):
    case REQUEST(ACTION_TYPES.UPDATE_COMMERCEORDERPAYMENT):
    case REQUEST(ACTION_TYPES.DELETE_COMMERCEORDERPAYMENT):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_COMMERCEORDERPAYMENT_LIST):
    case FAILURE(ACTION_TYPES.FETCH_COMMERCEORDERPAYMENT):
    case FAILURE(ACTION_TYPES.CREATE_COMMERCEORDERPAYMENT):
    case FAILURE(ACTION_TYPES.UPDATE_COMMERCEORDERPAYMENT):
    case FAILURE(ACTION_TYPES.DELETE_COMMERCEORDERPAYMENT):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_COMMERCEORDERPAYMENT_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_COMMERCEORDERPAYMENT):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_COMMERCEORDERPAYMENT):
    case SUCCESS(ACTION_TYPES.UPDATE_COMMERCEORDERPAYMENT):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_COMMERCEORDERPAYMENT):
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

const apiUrl = 'infinityshoporder/api/commerce-order-payments';

// Actions

export const getEntities: ICrudGetAllAction<ICommerceOrderPayment> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_COMMERCEORDERPAYMENT_LIST,
  payload: axios.get<ICommerceOrderPayment>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<ICommerceOrderPayment> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_COMMERCEORDERPAYMENT,
    payload: axios.get<ICommerceOrderPayment>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ICommerceOrderPayment> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_COMMERCEORDERPAYMENT,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ICommerceOrderPayment> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_COMMERCEORDERPAYMENT,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<ICommerceOrderPayment> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_COMMERCEORDERPAYMENT,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
