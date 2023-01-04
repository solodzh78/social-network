import { api } from '../../api';
import { IUserProfile } from '../../api/api';
import { actionTypes } from '../actionTypes';
import { AppThunk } from '../reduxStore';

export type ProfileStateType = {
  user: IUserProfile;
  posts: {
    id: number;
    text: string;
  }[];
  newPostText: string;
};

const initialState: ProfileStateType = {
  user: {
    aboutMe: '',
    contacts: {
      facebook: '',
      website: '',
      vk: '',
      twitter: '',
      instagram: '',
      youtube: '',
      github: '',
      mainLink: ''
    },
    lookingForAJob: false,
    lookingForAJobDescription: '',
    fullName: '',
    userId: 0,
    photos: {
      small: '',
      large: ''
    }
  },
  posts: [
    { id: 1, text: 'Hey, why nobody love me?' },
    { id: 2, text: 'It\'s our new program! Hey!' }
  ],
  newPostText: ''
}

export interface AddPostActionType {
  type: actionTypes.ADD_POST;
};

export interface ChangePostTextActionType {
  type: actionTypes.CHANGE_NEW_POST_TEXT;
  payload: string;
};

export interface SetUserProfileActionType {
  type: actionTypes.SET_USER_PROFILE;
  payload: IUserProfile;
};

export const addPostAC = (): AddPostActionType => ({ type: actionTypes.ADD_POST });

export const changePostTextAC = (text: string): ChangePostTextActionType =>
  ({ type: actionTypes.CHANGE_NEW_POST_TEXT, payload: text });

export const setUserProfileAC = (user: IUserProfile): SetUserProfileActionType =>
({ type: actionTypes.SET_USER_PROFILE, payload: user });

const actions = { addPostAC, changePostTextAC, setUserProfileAC }

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never
type InferTypes = InferValueTypes<typeof actions>
type ActionsType = ReturnType<InferTypes>

export const profileReducer = (state = initialState, action: ActionsType): ProfileStateType => {
  // debugger
  switch (action.type) {
    case actionTypes.ADD_POST:
      const newPost = { id: state.posts.length + 1, text: state.newPostText };
      return { ...state, posts: [...state.posts, newPost], newPostText: '' }

    case actionTypes.CHANGE_NEW_POST_TEXT:
      return { ...state, newPostText: action.payload }

    case actionTypes.SET_USER_PROFILE:
      return { ...state, user: action.payload }

    default:
      return state
  }
}

type ThunkType = AppThunk<ActionsType>;

export const getUserProfile = (userId: string | undefined): ThunkType => 
  async dispatch => 
    api.getUserProfile(userId || '2')
      .then(({data}) => dispatch(setUserProfileAC(data)))
      .catch(e => console.log(e))
      .finally(() => {})

//   import  * as  actions from "action-creators"
// type InferValueTypes<T> = T extends { [key:string]: infer U } ? U : never
// type ActionsTypess = ReturnType<InferValueTypes<typeof actionType>>

// enum ActionType {
//   one = 'one',
//   two = 'two',
//   three = 'three',
// }

// type ActionTypeMap = {
//   [ActionType.one]: number;
//   [ActionType.two]: string;
//   [ActionType.three]: boolean;
// }

// type Action<T extends ActionType> = {
//   type: T;
//   payload: ActionTypeMap[T];
// }
// type Action<T extends actionTypes> = T extends actionTypes.ADD_POST
//   ? { type: T }
//   : { type: T; payload: string };
// type ActionsTypeTernar = Action<actionTypes>

