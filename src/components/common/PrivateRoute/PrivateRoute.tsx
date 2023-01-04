import { FC, ReactNode } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

import { RootState } from "../../../redux/reduxStore";

type PropsType = {
  children: ReactNode;
  isAuth: boolean;
  redirectPath: string;
};

const DumpPrivateRoute: FC<PropsType> = ({children, isAuth}) => {
  if (!isAuth) {
    return <Navigate to='/login' replace />;
  }

  return <>{children}</>
}


export const PrivateRoute: FC<{children: ReactNode; redirectPath: string }> = ({children, redirectPath}) => {

  const mapState = (state: RootState) => ({ isAuth: state.auth.isAuth });

  const mapDispatch = {}
  
  const ConnectedElement =  connect(mapState, mapDispatch)(DumpPrivateRoute);

  return <ConnectedElement children={children} redirectPath={redirectPath}/>
}