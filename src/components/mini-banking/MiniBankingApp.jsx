import React, {Component} from "react"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LoginComponent from './LoginComponent.jsx'
import WelcomeComponent from "./WelcomeComponent.jsx"
import withNavigation from './WithNavigation.jsx'
import withParams from './WithParams.jsx'
import ErrorComponent from "./ErrorComponent.jsx"
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from "./FooterComponent.jsx"
import LogoutComponent from "./LogoutComponent.jsx"
import TransactionSummary from "./TransactionSummary.jsx"
import AuthenticatedRoute from "./AuthenticatedRoute.jsx"
import PerformTransaction from "./PerformTransaction.jsx"
import RegisterUserComponent from "./RegisterUserComponent.jsx"

class MiniBankingApp extends Component {
    render() {
      const LoginComponentWithNavigation = withNavigation(LoginComponent)
      const HeaderComponentWithNavigation = withNavigation(HeaderComponent)
      const WelcomeComponentWithParams = withParams(WelcomeComponent)
        return (
            <div className="MiniBankingApp">
              <Router>
                <HeaderComponentWithNavigation/>
                    <Routes>
                      <Route path="/" element={<LoginComponentWithNavigation />} /> 
                      <Route path="/login" element={<LoginComponentWithNavigation />}/>
                      <Route path="/register" element={<RegisterUserComponent />}/>
                      <Route path="/welcome/:name" element={
                          <AuthenticatedRoute>
                            <WelcomeComponentWithParams />
                          </AuthenticatedRoute>
                        }/>
                      <Route path="/transactions" element={
                          <AuthenticatedRoute>
                            <TransactionSummary />
                          </AuthenticatedRoute>
                        }/>
                      <Route path="/perform-transaction" element={
                          <AuthenticatedRoute>
                            <PerformTransaction />
                          </AuthenticatedRoute>
                        }/>
                      <Route path="/logout" element={
                          <AuthenticatedRoute>
                            <LogoutComponent />
                          </AuthenticatedRoute>
                        }/>
                      <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                  <FooterComponent/>
              </Router>
            </div>
        )
    }
}


export default MiniBankingApp


