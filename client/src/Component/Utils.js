


export const isLogin = () => {
    if(localStorage.getItem('access_token')){
        return true;
    }else{
        return false;
    }
}