import React, { useState, useEffect } from 'react'
import "./Lock.css"

function Lock() {
    const [modal, setModal] = useState(false)

    const [otp1, setOtp1] = useState("")
    const [otp2, setOtp2] = useState("")
    const [otp3, setOtp3] = useState("")
    const [otp4, setOtp4] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (otp1 == "1" && otp2 == "2" && otp3 == "3" && otp4 == "4") {
            setModal(false)
            sessionStorage.setItem("modal", false)
        }
        setOtp1("")
        setOtp2("")
        setOtp3("")
        setOtp4("")
    }

    const inputfocus = (elmnt) => {
        if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
            const next = elmnt.target.tabIndex - 2;
            if (next > -1) {

                elmnt.target.form.elements[next].focus()
            }
        }
        else {
            const next = elmnt.target.tabIndex;
            if (next < 4) {
                elmnt.target.form.elements[next].focus()
            }
        }
    }

    const handeleClick = () => {
        if (otp1 == "1" && otp2 == "2" && otp3 == "3" && otp4 == "4") {
            setModal(false)
            sessionStorage.setItem("modal", false)
        }
        setOtp1("")
        setOtp2("")
        setOtp3("")
        setOtp4("")
    }

    const handleLock = () => {
        sessionStorage.setItem("modal", true)
        setModal(true)
    }

    // useEffect(() => {
    //     console.log(sessionStorage.getItem("modal"))
    //     setModal(sessionStorage.getItem("modal"))
    // }, [sessionStorage.getItem("modal")])

    return (
        <>
            {modal && (
                <div className="modal">
                    <div className="in-modaal">
                        <form onSubmit={handleSubmit} className="form">
                            <div className="otpContainer">

                                <input
                                    name="otp1"
                                    type="text"
                                    autoComplete="off"
                                    className="otpInput"
                                    value={otp1}
                                    onChange={e => setOtp1(e.target.value)}
                                    tabIndex="1" maxLength="1"
                                    onKeyUp={e => inputfocus(e)}

                                />
                                <input
                                    name="otp2"
                                    type="text"
                                    autoComplete="off"
                                    className="otpInput"
                                    value={otp2}
                                    onChange={e => setOtp2(e.target.value)}
                                    tabIndex="2" maxLength="1"
                                    onKeyUp={e => inputfocus(e)}
                                />
                                <input
                                    name="otp3"
                                    type="text"
                                    autoComplete="off"
                                    className="otpInput"
                                    value={otp3}
                                    onChange={e => setOtp3(e.target.value)}
                                    tabIndex="3" maxLength="1"
                                    onKeyUp={e => inputfocus(e)}

                                />
                                <input
                                    name="otp4"
                                    type="text"
                                    autoComplete="off"
                                    className="otpInput"
                                    value={otp4}
                                    onChange={e => setOtp4(e.target.value)}
                                    tabIndex="4" maxLength="1"
                                    onKeyUp={e => inputfocus(e)}
                                />

                            </div>
                            <input type="submit" value="Unlock" className="modaal-btn" />
                        </form>
                    </div>
                </div>)
            }
            <div className="left-bottom">
                <div className="lock" onClick={() => handleLock()}>
                    <h3>Lock</h3>
                </div>
            </div>
        </>
    )
}

export default Lock
