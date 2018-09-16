import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { ICommerceItemPayInfo, defaultValue } from 'app/shared/model/infinityshoporder/commerce-item-pay-info.model';

export const ACTION_TYPES = {
  FETCH_COMMERCEITEMPAYINFO_LIST: 'commerceItemPayInfo/FETCH_COMMERCEITEMPAYINFO_LIST',
  FETCH_COMMERCEITEMPAYINFO: 'commerceItemPayInfo/FETCH_COMMERCEITEMPAYINFO',
  CREATE_COMMERCEITEMPAYINFO: 'commerceItemPayInfo/CREATE_COMMERCEITEMPAYINFO',
  UPDATE_COMMERCEITEMPAYINFO: 'commerceItemPayInfo/UPDATE_COMMERCEITEMPAYINFO',
  DELETE_COMMERCEITEMPAYINFO: 'commerceItemPayInfo/DELETE_COMMERCEITEMPAYINFO',
  RESET: 'commerceItemPayInfo/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ICommerceItemPayInfo>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type CommerceItemPayInfoState = Readonly<typeof initialState>;

// Reducer

export default (state: CommerceItemPayInfoState = initialState, action): CommerceItemPayInfoState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_COMMERCEITEMPAYINFO_LIST):
    case REQUEST(ACTION_TYPES.FETCH_COMMERCEITEMPAYINFO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_COMMERCEITEMPAYINFO):
    case REQUEST(ACTION_TYPES.UPDATE_COMMERCEITEMPAYINFO):
    case REQUEST(ACTION_TYPES.DELETE_COMMERCEITEMPAYINFO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_COMMERCEITEMPAYINFO_LIST):
    case FAILURE(ACTION_TYPES.FETCH_COMMERCEITEMPAYINFO):
    case FAILURE(ACTION_TYPES.CREATE_COMMERCEITEMPAYINFO):
    case FAILURE(ACTION_TYPES.UPDATE_COMMERCEITEMPAYINFO):
    case FAILURE(ACTION_TYPES.DELETE_COMMERCEITEMPAYINFO):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_COMMERCEITEMPAYINFO_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_COMMERCEITEMPAYINFO):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_COMMERCEITEMPAYINFO):
    case SUCCESS(ACTION_TYPES.UPDATE_COMMERCEITEMPAYINFO):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_COMMERCEITEMPAYINFO):
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

const apiUrl = 'infinityshoporder/api/commerce-item-pay-infos';

// Actions

export const getEntities: ICrudGetAllAction<ICommerceItemPayInfo> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_COMMERCEITEMPAYINFO_LIST,
  payload: axios.get<ICommerceItemPayInfo>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<ICommerceItemPayInfo> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_COMMERCEITEMPAYINFO,
    payload: axios.get<ICommerceItemPayInfo>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ICommerceItemPayInfo> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_COMMERCEITEMPAYINFO,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ICommerceItemPayInfo> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_COMMERCEITEMPAYINFO,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<ICommerceItemPayInfo> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_COMMERCEITEMPAYINFO,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
