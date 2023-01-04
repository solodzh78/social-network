import { api } from "../../api";
import { actionTypes } from "../actionTypes";
import { AppThunk } from "../reduxStore";

export interface IAuthState {
  id: number;
  email: string;
  login: string;
  isAuth: boolean;
}

const initialState: IAuthState = {
  id: 0,
  email: '',
  login: '',
  isAuth: false,
}

interface setAuthDataActionType {
  type: actionTypes.SET_AUTH_DATA;
  payload: IAuthState;
}

export const setAuthDataAC = (data: IAuthState): setAuthDataActionType =>
  ({ type: actionTypes.SET_AUTH_DATA, payload: data });

const actions = {
  setAuthDataAC,
}

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never
type InferTypes = InferValueTypes<typeof actions>
type ActionsType = ReturnType<InferTypes>

export const authReducer = (state = initialState, action: ActionsType): IAuthState => {
  // debugger
  switch (action.type) {
    case actionTypes.SET_AUTH_DATA:
      return action.payload

    default:
      return state
  }
}

type ThunkType = AppThunk<ActionsType>;

export const getMe = (): ThunkType => 
  async dispatch => {
    api.getMe()
      .then(({ data: {data, resultCode} }) => {
        const isAuth = resultCode === 0 ? true : false 
        dispatch(setAuthDataAC({...data, isAuth}))
      })
      .catch(e => console.log(e))
      .finally(() => {})}