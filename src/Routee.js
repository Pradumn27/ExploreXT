import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App from './App'
import { GlobalProvider } from './Context/GlobalState'

function Routee() {
    return (
        <GlobalProvider>
            <Router>
                <Routes>
                    <Route exact path="/" element={<App />} />
                </Routes>
            </Router>
        </GlobalProvider>
    )
}

export default Routee
