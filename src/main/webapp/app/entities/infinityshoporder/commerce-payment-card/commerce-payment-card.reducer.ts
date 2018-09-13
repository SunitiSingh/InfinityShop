import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ICommercePaymentCard, defaultValue } from 'app/shared/model/infinityshoporder/commerce-payment-card.model';

export const ACTION_TYPES = {
  FETCH_COMMERCEPAYMENTCARD_LIST: 'commercePaymentCard/FETCH_COMMERCEPAYMENTCARD_LIST',
  FETCH_COMMERCEPAYMENTCARD: 'commercePaymentCard/FETCH_COMMERCEPAYMENTCARD',
  CREATE_COMMERCEPAYMENTCARD: 'commercePaymentCard/CREATE_COMMERCEPAYMENTCARD',
  UPDATE_COMMERCEPAYMENTCARD: 'commercePaymentCard/UPDATE_COMMERCEPAYMENTCARD',
  DELETE_COMMERCEPAYMENTCARD: 'commercePaymentCard/DELETE_COMMERCEPAYMENTCARD',
  RESET: 'commercePaymentCard/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ICommercePaymentCard>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type CommercePaymentCardState = Readonly<typeof initialState>;

// Reducer

export default (state: CommercePaymentCardState = initialState, action): CommercePaymentCardState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_COMMERCEPAYMENTCARD_LIST):
    case REQUEST(ACTION_TYPES.FETCH_COMMERCEPAYMENTCARD):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_COMMERCEPAYMENTCARD):
    case REQUEST(ACTION_TYPES.UPDATE_COMMERCEPAYMENTCARD):
    case REQUEST(ACTION_TYPES.DELETE_COMMERCEPAYMENTCARD):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_COMMERCEPAYMENTCARD_LIST):
    case FAILURE(ACTION_TYPES.FETCH_COMMERCEPAYMENTCARD):
    case FAILURE(ACTION_TYPES.CREATE_COMMERCEPAYMENTCARD):
    case FAILURE(ACTION_TYPES.UPDATE_COMMERCEPAYMENTCARD):
    case FAILURE(ACTION_TYPES.DELETE_COMMERCEPAYMENTCARD):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_COMMERCEPAYMENTCARD_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_COMMERCEPAYMENTCARD):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_COMMERCEPAYMENTCARD):
    case SUCCESS(ACTION_TYPES.UPDATE_COMMERCEPAYMENTCARD):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_COMMERCEPAYMENTCARD):
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

const apiUrl = 'infinityshoporder/api/commerce-payment-cards';

// Actions

export const getEntities: ICrudGetAllAction<ICommercePaymentCard> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_COMMERCEPAYMENTCARD_LIST,
  payload: axios.get<ICommercePaymentCard>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<ICommercePaymentCard> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_COMMERCEPAYMENTCARD,
    payload: axios.get<ICommercePaymentCard>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ICommercePaymentCard> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_COMMERCEPAYMENTCARD,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ICommercePaymentCard> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_COMMERCEPAYMENTCARD,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<ICommercePaymentCard> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_COMMERCEPAYMENTCARD,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
