import jwt_decode from 'jwt-decode'

export const checkIfUserIsLoggedIn = () => {
    let token = localStorage.getItem('token')
    if(!token){
        return false
    }else{
        const decoded = jwt_decode(token)
        if(decoded.exp * 1000 < Date.now()){
        localStorage.removeItem("token")
        return false
    }else{
        return true
    }
}
}