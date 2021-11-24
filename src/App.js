import React, { useContext } from 'react'
import "./App.css"
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';

function App() {

    return (
        <>
            <div className="cuve">
                <Sidebar />
                <Main />
            </div>
        </>
    )
}

export default App