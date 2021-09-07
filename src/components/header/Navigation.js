import { Link, useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {  logout } from '../../actions/user.actions';
const Navigation=()=>{
    const isLogin = useSelector((state) => state.loggedIn);
    const dispatch = useDispatch();
    let history = useHistory();
   
    const logoutHandler = () => {
        dispatch(logout());
        localStorage.removeItem("auth");

        history.push("/");
    }
    return(<>
   <header className="header">
   <Link to='/'>
     <h2 className="logo">Test App</h2>
   </Link>
   <nav>
     <ul>
       {!isLogin&&
       <li>
         <Link to='/auth'>Login</Link>
       </li>
       }
       {isLogin&&
       <li>
        <button onClick={logoutHandler}>Logout</button>
       </li>
       }
     </ul>
   </nav>
 </header>
 </>)
}
export default Navigation;