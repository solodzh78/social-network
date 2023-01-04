import React, { FC } from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, AddMessageActionType, changeMessageTextActionCreator, ChangeMessageTextActionType } from '../../../redux/reducers/dialogsReducer';
import { RootState } from '../../../redux/reduxStore';
import { Dialogs } from './Dialogs';

export const ConnectedDialogs: FC = () => {

  const mapState = (state: RootState) => ({
    state: state.dialogsPage
  });
  const mapDispatch = (dispatch: (arg0: AddMessageActionType | ChangeMessageTextActionType) => void) => ({
    addMessageHandler: () => dispatch(addMessageActionCreator()),
    newMessageTextChangeHandler: (text: string) => dispatch(changeMessageTextActionCreator(text))
  })
  const ConnectedElement =  connect(mapState, mapDispatch)(Dialogs);

  return <ConnectedElement />
}
