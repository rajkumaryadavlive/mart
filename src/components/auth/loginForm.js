import banner from '../../assets/image/login-banner.svg'
import { useDispatch } from 'react-redux';
import React, { useState} from "react";
import {loginSuccess} from '../../actions/';
import {alertConstants} from '../../constants/alert.constants';

const LoginForm=()=>{
   
  const dispatch = useDispatch();
  
  const[err, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  
  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
    };

  const handlePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

    const handleLogin=(e)=>
    {
        e.preventDefault();
        if ((email==="quest@gmail.com") && (password ==="Test123")) {
            setError("Login Successfully!");
            setLoading(true);
            dispatch(loginSuccess());
            
         }
        else 
        { 
          setError(alertConstants.ERROR);
        }
    }

    
   
   return(<>

  {loading?"": <div className="login">
        <div className="login__content">
            <div className="login__img">
                <img src={banner} alt="login_form_image"/>
            </div>

            <div className="login__forms">
                <form  className="login__register">
                    <h1 className="login__title">Sign In</h1>

                    <div className="login__box">
                        <i className='bx bx-user login__icon'></i>
                        <input type="text" onClick={handleEmail} id="email"  placeholder="Username" className="login__input"/>
                    </div>

                    <div className="login__box">
                        <i className='bx bx-lock-alt login__icon'></i>
                        <input type="password" onClick={handlePassword} id="password"  placeholder="Password" className="login__input"/>
                    </div>

                    <a href="#" className="login__forgot">Forgot password?</a>

                    <a href="#" onClick={handleLogin} className="login__button">Sign In</a>
                   <span>{err}</span>
                     <div>
                        <span className="login__account">Don't have an account ?</span>
                        <span className="login__signin" id="sign-up">Sign Up</span>
                    </div>
                </form>

              </div>
        </div>
    </div> } 
 
    </>)
}
export default LoginForm