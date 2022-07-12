import axios from "axios"
import { API_URL } from "../../Constants"
import { USERNAME_SESSION_ATTRIBUTE } from "../../Constants"

class AuthenticationService {

    executeBasicAuthenticationService(username, password) {
        return axios.get(`${API_URL}/basicauth`, {headers: {authorization: this.createBasicAuthToken(username, password)}})
    }

    executeJwtAuthenticationService(username, password) {
        return axios.post(`${API_URL}/authenticate`, {
            username, 
            password
        })
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(`${username}:${password}`)
    }

    registerSuccessfullLogin(username, password) {
        sessionStorage.setItem(USERNAME_SESSION_ATTRIBUTE, username)
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }

    registerSuccessfullLoginForJwt(username, token) {
        sessionStorage.setItem(USERNAME_SESSION_ATTRIBUTE, username)
        this.setupAxiosInterceptors(this.createJwtToken(token))
    }

    createJwtToken(token) {
        return 'Bearer ' + token
    }

    logout() {
        sessionStorage.removeItem(USERNAME_SESSION_ATTRIBUTE)
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USERNAME_SESSION_ATTRIBUTE)
        if(user === null)
            return false
        else
            return true
    }

    getLoggedInUser() {
        let user = sessionStorage.getItem(USERNAME_SESSION_ATTRIBUTE)
        if(user === null)
            return ''
        else
            return user
    }

    setupAxiosInterceptors(token) {
        console.log('token-', token)
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()