import axios from "axios"
import { JPA_API_URL, API_URL } from "../../Constants"

class TransactionDataService {

    reteriveAllTransaction(name) {
        return axios.get(`${JPA_API_URL}/mini-banking/${name}/transactions`)
    }

    reteriveAccountDetails(name) {
        return axios.get(`${JPA_API_URL}/mini-banking/${name}/account-info`)
    }

    createTransaction(name, transaction) {
        return axios.post(`${JPA_API_URL}/mini-banking/${name}/perform-transaction`, transaction)
    }
}

export default new TransactionDataService()