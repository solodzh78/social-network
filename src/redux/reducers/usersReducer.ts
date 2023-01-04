import { AppThunk } from './../reduxStore';
import { api } from "../../api";
import { actionTypes } from "../actionTypes";
import { IUsers } from '../../api/api';

export interface IUsersState {
  items: {
    name: string;
    id: number;
    uniqueUrlName: string;
    photos: {
      small: string;
      large: string;
    },
    status: string;
    followed: boolean;
  }[];
  totalCount: number;
  error: string | null;
  currentPage: number;
  pageSize: number;
  isLoading: boolean,
  disabledFollowButtons: number[],
}

const initialState: IUsersState = {
  items: [],
  totalCount: 0,
  currentPage: 1,
  pageSize: 5,
  isLoading: false,
  disabledFollowButtons: [],
  error: null,
}

export interface FollowUserActionType {
  type: actionTypes.FOLLOW_USER;
  payload: number;
};

export interface UnFollowUserActionType {
  type: actionTypes.UNFOLLOW_USER;
  payload: number;
};

export interface ChangePageActionType {
  type: actionTypes.CHANGE_PAGE;
  payload: number;
};

export interface SetUsersActionType {
  type: actionTypes.SET_USERS;
  payload: IUsers;
};

export interface SetIsLoadingActionType {
  type: actionTypes.SET_ISLOADING;
  payload: boolean;
};

export interface DisableFollowButtonActionType {
  type: actionTypes.DISABLE_FOLLOW_BUTTON;
  payload: number;
};

export interface EnableFollowButtonActionType {
  type: actionTypes.ENABLE_FOLLOW_BUTTON;
  payload: number;
};

export const followUserAC = (id: number): FollowUserActionType =>
  ({ type: actionTypes.FOLLOW_USER, payload: id });

export const unfollowUserAC = (id: number): UnFollowUserActionType =>
  ({ type: actionTypes.UNFOLLOW_USER, payload: id });

export const changePageAC = (page: number): ChangePageActionType =>
  ({ type: actionTypes.CHANGE_PAGE, payload: page });

export const setUsersAC = (data: IUsers): SetUsersActionType =>
  ({ type: actionTypes.SET_USERS, payload: data });

export const setIsLoadingAC = (isLoading: boolean): SetIsLoadingActionType =>
  ({ type: actionTypes.SET_ISLOADING, payload: isLoading });

export const disableFollowButtonAC = (id: number): DisableFollowButtonActionType =>
  ({ type: actionTypes.DISABLE_FOLLOW_BUTTON, payload: id });

export const enableFollowButtonAC = (id: number): EnableFollowButtonActionType =>
  ({ type: actionTypes.ENABLE_FOLLOW_BUTTON, payload: id });

const actions = {
  followUserAC,
  unfollowUserAC,
  changePageAC,
  setUsersAC,
  setIsLoadingAC,
  disableFollowButtonAC,
  enableFollowButtonAC
}

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never
type InferTypes = InferValueTypes<typeof actions>
type ActionsType = ReturnType<InferTypes>

export const usersReducer = (state = initialState, action: ActionsType): IUsersState => {
  // debugger
  switch (action.type) {
    case actionTypes.FOLLOW_USER:
      return {
        ...state, items: [...state.items.map(user =>
          user.id === action.payload
            ? { ...user, followed: true }
            : user)]
      }

    case actionTypes.UNFOLLOW_USER:
      return {
        ...state, items: [...state.items.map(user =>
          user.id === action.payload
            ? { ...user, followed: false }
            : user)]
      }

    case actionTypes.CHANGE_PAGE:
      return { ...state, currentPage: action.payload }

    case actionTypes.SET_USERS:
      return {
        ...state,
        items: action.payload.items,
        totalCount: action.payload.totalCount,
        error: action.payload.error
      }

    case actionTypes.SET_ISLOADING:
      return { ...state, isLoading: action.payload }

    case actionTypes.DISABLE_FOLLOW_BUTTON:
      return { ...state, disabledFollowButtons: 
        [...state.disabledFollowButtons, action.payload] }

    case actionTypes.ENABLE_FOLLOW_BUTTON:
      return { ...state, disabledFollowButtons: 
        state.disabledFollowButtons.filter(id => id !== action.payload)}

    default:
      return state
  }
}

// type ThunkType = ThunkAction<void, RootState, unknown, ActionsType>;
type ThunkType = AppThunk<ActionsType>;

export const getUsers = (): ThunkType => {
  return async (dispatch, getState) => {
    dispatch(setIsLoadingAC(true));
    const {currentPage, pageSize} = getState().usersPage;
    api.getUsers(currentPage, pageSize)
    .then(({ data }) => dispatch(setUsersAC(data)))
    .catch(e => console.log(e))
    .finally(() => dispatch(setIsLoadingAC(false)))
  }
}

// export const getPage = (page: number): ThunkType => {
//   return async (dispatch, getState) => {
//     dispatch(setIsLoadingAC(true));
//     console.log('getting users');
//     const {currentPage, pageSize} = getState().usersPage;
//     api.getUsers(currentPage, pageSize)
//     .then(({ data }) => dispatch(setUsersAC(data)))
//     .catch(e => console.log(e))
//     .finally(() => dispatch(setIsLoadingAC(false)))
//   }
// }

export const followUser = (id: number): ThunkType => {
  return (async dispatch => {
  dispatch(disableFollowButtonAC(id));
  api.followUser(id)
    .then(() => dispatch(getUsers()))
    .catch(e => console.log(e))
    .finally(() => dispatch(enableFollowButtonAC(id)))
  })}

export const unfollowUser = (id: number): ThunkType => {
  return (async dispatch => {
  dispatch(disableFollowButtonAC(id));
  api.unfollowUser(id)
    .then(() => dispatch(getUsers()))
    .catch(e => console.log(e))
    .finally(() => dispatch(enableFollowButtonAC(id)))
  })}
