import { legacy_createStore, combineReducers, applyMiddleware, AnyAction } from 'redux';
import ThunkMiddleware, { ThunkAction } from 'redux-thunk';

import { authReducer } from './reducers/authReducer';
import { dialogsReducer } from './reducers/dialogsReducer';
import { profileReducer } from './reducers/profileReducer';
import { usersReducer } from './reducers/usersReducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer
});
export const store = legacy_createStore(reducers, applyMiddleware(ThunkMiddleware));
// @ts-ignore
window.store = store;

export const dispatch = store.dispatch.bind(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ActionsType extends AnyAction = AnyAction, ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  ActionsType
>