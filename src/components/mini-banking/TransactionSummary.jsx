import React, { Component } from 'react'
import moment from 'moment'
import TransactionDataService from '../../api/mini-banking/TransactionDataService'
import AuthenticationService from './AuthenticationService'
import PerformTransaction from './PerformTransaction'

class TransactionSummary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            transactions : []
            //transactions : [{id: 1, remark: 'UPI/2189683870/Payment from Ph/736', transactionDate: new Date('06/22/2022'), transactionType: 'Cr.', amount: 1200}]
        }
    }

    componentDidMount() {
        TransactionDataService.reteriveAllTransaction(AuthenticationService.getLoggedInUser())
            .then(
                response => {
                    this.setState({transactions: response.data})
                }
            )
    }

    render () {
        return(
            <div className="container">
                {/* <div className="container">
                    <PerformTransaction/>
                </div> */}

                <div className="container">
                <h1>Transaction Summary</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Date</th>
                            <th>Remark</th>
                            <th>Credit/Debit</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.transactions.map( 
                                (transaction, i) =>
                                <tr key={transaction.id}>
                                    <td>{i + 1}</td>
                                    <td>{moment(transaction.transactionDate).format('DD/MM/YYYY')}</td>
                                    <td>{transaction.remark}</td>
                                    <td>{transaction.transactionType}</td>
                                    <td>{transaction.amount}</td>
                                </tr>
                            )
                        }
                    </tbody>                     
                </table>
                </div>
            </div>
            
        )
    }
}

export default TransactionSummary