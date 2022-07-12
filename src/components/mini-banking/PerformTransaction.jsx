import React, { Component, useEffect, useState } from 'react'
import TransactionDataService from '../../api/mini-banking/TransactionDataService'
import AuthenticationService from './AuthenticationService'

const PerformTransaction = (props) => {
    const [totalBalance, setTotalBalance] = useState(0)
    const [transAmount, setTransAmount] = useState("")

    useEffect(() => {
        TransactionDataService.reteriveAccountDetails(AuthenticationService.getLoggedInUser())
            .then(
                response => {
                    setTotalBalance(response.data.accountBalance)
                }
            )
    },[])

    const performDeposit = (transType, amount) => {
        const createTrans = {remark: 'TRANS/'+ transType + '/from Ph/736', transactionDate: new Date(), transactionType: transType, amount}
        TransactionDataService.createTransaction(AuthenticationService.getLoggedInUser(), createTrans)
            .then(
                response => {
                    if(response.status === 200) {
                        alert("Transaction successful!!")
                        setTransAmount("")
                        setTotalBalance(response.data.accountBalance)
                    } else {
                        alert("Transaction failed!")
                    }
                }
            )
    }

    const handleChange = (e) => {
        setTransAmount(e.target.value)
    }

    return(
        <div className="container">
            <h1>Transfer Funds</h1>
            {/* <div>
                <label> Select benefeciary:<sup className="text-red">*</sup></label>
                <select className="m-3">
                    <option value="">Aman Halili (A/C 22XXXXXXX09)</option>
                    <option value="">Arun Soni (A/C 22XXXXXXX91)</option>
                    <option value="">Aman Dubey (A/C 22XXXXXXX93)</option>
                </select>
            </div> */}

            <div>
                <label>Perform Balance:</label>
                <label className="m-3">{totalBalance} AED</label>
            </div>
            
            <div>
                <label>Enter Amount:<sup className="text-red">*</sup></label>
                <input className="m-3" type="number" name="transAmount" onChange={handleChange} value={transAmount}/>
            </div>

            <div>
                <button className="btn btn-success m-2" onClick={() => performDeposit("Cr.", transAmount)}>Deposit</button>
                <button className="btn btn-success m-2" onClick={() => performDeposit("Db.", transAmount)}>Withdraw</button>
            </div>

        </div>
    )
}

export default PerformTransaction