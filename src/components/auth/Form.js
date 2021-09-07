import FormCard from './FormCard';

const Form=({handleLogin,handleEmail,handlePassword,err})=>{
    return(<>
           <FormCard>
           <div className="login__box">
                        <i className='bx bx-user login__icon'></i>
                        <input type="text" onClick={handleEmail} id="email"  placeholder="Username" className="login__input" value="quest@gmail.com"/>
                    </div>

                    <div className="login__box">
                        <i className='bx bx-lock-alt login__icon'></i>
                        <input type="password" onClick={handlePassword} id="password"  placeholder="Password" className="login__input"value="Test123"/>
                    </div>

                    <a href="/" className="login__forgot">Forgot password?</a>

                    <a href="/" onClick={handleLogin} className="login__button">Sign In</a>
                   <span>{err}</span>
                     <div>
                        <span className="login__account">Don't have an account ?</span>
                        <span className="login__signin" id="sign-up">Sign Up</span>
                    </div>
              
           </FormCard>
                    </>);
}
export default Form;