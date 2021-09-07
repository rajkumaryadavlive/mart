import React from 'react';
import { Switch} from 'react-router-dom';
import PublicRoute from '../PublicRoute/PublicRoute'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
const Login =React.lazy(()=>import('../../pages/auth/Login'));
const Home = React.lazy(() => import('../../pages/home/Home'));
const Profile =React.lazy(() => import('../../pages/profile/Profile'));
const NotMatch =React.lazy(()=>import('../../pages/404/NotMatch'));

const AppRouter=()=>{
return (
    
        <Switch>
          /* PUBLIC ROUTE   */
          <PublicRoute  restricted={true} component={Login} path="/" exact />

          /* PRIVATE ROUTE */
          <PrivateRoute component={Home} path="/home" exact />
          <PrivateRoute component={Profile} path="/profile" exact />
          <PrivateRoute component={NotMatch} path="*" />
          <PublicRoute component={NotMatch} path="*" />
        </Switch>
     
  );
}
export default AppRouter;