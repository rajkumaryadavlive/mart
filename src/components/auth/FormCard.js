import banner from '../../assets/image/login-banner.svg'
const FormCard=({children})=>{
    return(<>
         <div className="login">
           <div className="login__content">
            <div className="login__img">
                <img src={banner} alt="login_form_image"/>
            </div>

            <div className="login__forms">
                <form  className="login__register">
                    <h1 className="login__title">Sign In</h1>


                     {children}

                 </form>

                </div>
            </div>
       </div>
                    
                    
                    
                    </>)
}
export default FormCard;