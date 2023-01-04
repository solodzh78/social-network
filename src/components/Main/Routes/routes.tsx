import { PrivateRoute } from "../../common"
import { ConnectedDialogs } from "../Dialogs/ConnectedDialogs"
import { ConnectedProfile } from "../Profile/ConnectedProfile"
import { ConnectedUsers } from "../Users/ConnectedUsers"


export const Profile =
  <PrivateRoute redirectPath='/login'>
    <ConnectedProfile />
  </PrivateRoute>

export const Dialogs =
  <PrivateRoute redirectPath='/login'>
    <ConnectedDialogs />
  </PrivateRoute>

export const Users =
  <PrivateRoute redirectPath='/login'>
    <ConnectedUsers />
  </PrivateRoute>