let Auth = {};

Auth.saveToken = (Token) => {
    localStorage.setItem('token', JSON.stringify({Token}));
}

Auth.deleteToken = () => {
    localStorage.removeItem('token');
    localStorage.clear();
}

Auth.getToken = () => {
    if(localStorage.getItem('token')){
        return JSON.parse(localStorage.getItem('token'));
    }else{
        return null;
    }
}

export default Auth;