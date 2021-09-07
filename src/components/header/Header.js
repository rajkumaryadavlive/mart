import Navigation from './Navigation';
import { useSelector } from 'react-redux';

const Header = () => {
  const isLogin = useSelector((state) => state.loggedIn);
  console.log(isLogin);
  if(!isLogin){
      localStorage.removeItem("auth");
    }
  return (<>
     { isLogin? <Navigation /> :""}
    </>
    
  );
};

export default Header;
