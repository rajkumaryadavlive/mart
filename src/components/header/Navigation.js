import { Link, useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {  logout } from '../../actions/user.actions';
const Navigation=()=>{
    const logged = useSelector((state) => state.loggedIn);
    const dispatch = useDispatch();
    let history = useHistory();
    if(!logged){
        localStorage.removeItem("auth");
     }
    const logoutHandler = () => {
        dispatch(logout());
        history.push("/");
    }
    return(<>
   <header className="header">
   <Link to='/'>
     <div className="logo">Test App</div>
   </Link>
   <nav>
     <ul>
       {!logged&&
       <li>
         <Link to='/auth'>Login</Link>
       </li>
       }
       {logged&&
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