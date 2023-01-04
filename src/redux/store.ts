// import { addMessageActionCreator, changeMessageTextActionCreator, DialogsActionsType, dialogsReducer } from './reducers/dialogsReducer';
// import { addPostActionCreator, changePostTextActionCreator, profileReducer } from './reducers/profileReducer';

// const actions = {
//   addPostActionCreator,
//   changePostTextActionCreator,
//   addMessageActionCreator,
//   changeMessageTextActionCreator
// }

// type InferValueTypes<T> = T extends { [key:string]: infer U } ? U : never
// type InferTypes = InferValueTypes<typeof actions>
// type ActionsTypess = ReturnType<InferTypes> 


// const state = {
//   profilePage: {
//     posts: [
//       { id: 1, text: 'Hey, why nobody love me?' },
//       { id: 2, text: 'It\'s our new program! Hey!' }
//     ],
//     newPostText: ''
//   },
//   dialogsPage: {
//     users: [
//       { id: 1, name: 'Andrew' },
//       { id: 2, name: 'Dmitry' },
//       { id: 3, name: 'Sasha' },
//       { id: 4, name: 'Sveta' },
//       { id: 5, name: 'Valera' },
//       { id: 6, name: 'Viktor' },
//     ],
//     messages: [
//       { id: 1, message: 'Hi' },
//       { id: 2, message: 'How are you?' },
//       { id: 3, message: 'Yo' },
//       { id: 4, message: 'Yo' },
//       { id: 5, message: 'Yo' }
//     ],
//     newMessageText: ''
//   },
//   sidebar: {}
// }

// export type stateType = typeof state
// export type profileType = typeof state.profilePage
// export type dialogsType = typeof state.dialogsPage

// class Store {
//   private subscriber: ((state: stateType) => void) | undefined
//   private state: stateType
//   constructor(state: stateType) {
//     this.state = state
//   }
//   getState() {
//     return this.state
//   }
//   setState(newState: stateType) {
//     this.state = newState
//     this.subscriber && this.subscriber(this.getState())
//   }
//   subsribe(func: (state: stateType) => void) {
//     this.subscriber = func
//   }
//   dispatch(action: any) {
//     this.setState({ ...this.getState(), profilePage: profileReducer(this.getState().profilePage, action) });
//     this.setState({ ...this.getState(), dialogsPage: dialogsReducer(this.getState().dialogsPage, action) });
//   }
// }

// export const store = new Store(state);

// export const dispatch = store.dispatch.bind(store);

export const a = 1