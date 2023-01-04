import { actionTypes } from "../actionTypes";

export type DialogsStateType = {
  users: {
    id: number;
    name: string;
  }[];
  messages: {
    id: number;
    message: string;
  }[];
  newMessageText: string;
};

export interface AddMessageActionType {
  type: actionTypes.ADD_MESSAGE;
};

export interface ChangeMessageTextActionType {
  type: actionTypes.CHANGE_NEW_MESSAGE_TEXT;
  payload: string;
};

// type ActionsType = AddPostActionType | ChangePostTextActionType;

type Action<T extends actionTypes> = T extends actionTypes.ADD_MESSAGE 
  ? { type: T } 
  : { type: T; payload: string };
export type DialogsActionsType = Action<actionTypes>

const initialState: DialogsStateType = {
  users: [
    { id: 1, name: 'Andrew' },
    { id: 2, name: 'Dmitry' },
    { id: 3, name: 'Sasha' },
    { id: 4, name: 'Sveta' },
    { id: 5, name: 'Valera' },
    { id: 6, name: 'Viktor' },
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' }
  ],
  newMessageText: ''
}

export const addMessageActionCreator = (): AddMessageActionType => ({ type: actionTypes.ADD_MESSAGE });

export const changeMessageTextActionCreator = (text: string): ChangeMessageTextActionType =>
  ({ type: actionTypes.CHANGE_NEW_MESSAGE_TEXT, payload: text });

  const actions = {
    addMessageActionCreator,
    changeMessageTextActionCreator
  }
  
  type InferValueTypes<T> = T extends { [key:string]: infer U } ? U : never
  type InferTypes = InferValueTypes<typeof actions>
  type ActionsTypess = ReturnType<InferTypes>

export const dialogsReducer = (state = initialState, action: ActionsTypess): DialogsStateType  => {
  // debugger
  switch (action.type) {
    case actionTypes.ADD_MESSAGE:
      const newMessage = { id: state.messages.length + 1, message: state.newMessageText };
      return { ...state, messages: [...state.messages, newMessage], newMessageText: '' }

    case actionTypes.CHANGE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.payload }

    default:
      return state
  }
}

