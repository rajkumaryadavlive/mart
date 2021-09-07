export const Auth =()=>{
    
    if (localStorage.getItem('auth')) return true;
    return false;

}
  