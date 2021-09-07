import Navigation from './Navigation';
import {Auth}  from '../../middleware/auth';

const Header = () => {
   console.log(Auth())
  return (<>
     { Auth() ? <Navigation /> :""}
    </>
    
  );
};

export default Header;
