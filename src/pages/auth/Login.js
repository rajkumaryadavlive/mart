import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from "../../components/auth/loginForm";
const Login=()=>{
    
  const logged = useSelector((state) => state.loggedIn);
   if(logged){
      localStorage.setItem('auth',logged);
              
        return <Redirect to="/home" />
     
     }
 
    return <LoginForm />

}
export default Login;
