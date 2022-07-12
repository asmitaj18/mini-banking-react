import axios from "axios"
import { API_URL } from "../../Constants"

class AccountDataService {

    reteriveAccountDetails(name) {
        return axios.get(`${API_URL}/mini-banking/${name}/account-info`)
    }
}

export default new AccountDataService()