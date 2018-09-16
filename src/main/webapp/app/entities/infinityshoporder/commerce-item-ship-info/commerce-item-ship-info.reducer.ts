import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { ICommerceItemShipInfo, defaultValue } from 'app/shared/model/infinityshoporder/commerce-item-ship-info.model';

export const ACTION_TYPES = {
  FETCH_COMMERCEITEMSHIPINFO_LIST: 'commerceItemShipInfo/FETCH_COMMERCEITEMSHIPINFO_LIST',
  FETCH_COMMERCEITEMSHIPINFO: 'commerceItemShipInfo/FETCH_COMMERCEITEMSHIPINFO',
  CREATE_COMMERCEITEMSHIPINFO: 'commerceItemShipInfo/CREATE_COMMERCEITEMSHIPINFO',
  UPDATE_COMMERCEITEMSHIPINFO: 'commerceItemShipInfo/UPDATE_COMMERCEITEMSHIPINFO',
  DELETE_COMMERCEITEMSHIPINFO: 'commerceItemShipInfo/DELETE_COMMERCEITEMSHIPINFO',
  RESET: 'commerceItemShipInfo/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ICommerceItemShipInfo>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type CommerceItemShipInfoState = Readonly<typeof initialState>;

// Reducer

export default (state: CommerceItemShipInfoState = initialState, action): CommerceItemShipInfoState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_COMMERCEITEMSHIPINFO_LIST):
    case REQUEST(ACTION_TYPES.FETCH_COMMERCEITEMSHIPINFO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_COMMERCEITEMSHIPINFO):
    case REQUEST(ACTION_TYPES.UPDATE_COMMERCEITEMSHIPINFO):
    case REQUEST(ACTION_TYPES.DELETE_COMMERCEITEMSHIPINFO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_COMMERCEITEMSHIPINFO_LIST):
    case FAILURE(ACTION_TYPES.FETCH_COMMERCEITEMSHIPINFO):
    case FAILURE(ACTION_TYPES.CREATE_COMMERCEITEMSHIPINFO):
    case FAILURE(ACTION_TYPES.UPDATE_COMMERCEITEMSHIPINFO):
    case FAILURE(ACTION_TYPES.DELETE_COMMERCEITEMSHIPINFO):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_COMMERCEITEMSHIPINFO_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_COMMERCEITEMSHIPINFO):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_COMMERCEITEMSHIPINFO):
    case SUCCESS(ACTION_TYPES.UPDATE_COMMERCEITEMSHIPINFO):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_COMMERCEITEMSHIPINFO):
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

const apiUrl = 'infinityshoporder/api/commerce-item-ship-infos';

// Actions

export const getEntities: ICrudGetAllAction<ICommerceItemShipInfo> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_COMMERCEITEMSHIPINFO_LIST,
  payload: axios.get<ICommerceItemShipInfo>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<ICommerceItemShipInfo> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_COMMERCEITEMSHIPINFO,
    payload: axios.get<ICommerceItemShipInfo>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ICommerceItemShipInfo> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_COMMERCEITEMSHIPINFO,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ICommerceItemShipInfo> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_COMMERCEITEMSHIPINFO,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<ICommerceItemShipInfo> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_COMMERCEITEMSHIPINFO,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
