import React, { useState, useRef } from "react"
import QRCode from "react-qr-code";


function GenerateQR (){
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef(null)

    const generateQR = (e) => {
        e.preventDefault()
        // console.log(inputRef.current.value)
        setInputValue(inputRef.current.value)

    }

    const getInputValue = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <div className="content">
            <div className="container">
                <h2>Generate QR</h2>
                <div className="qr-form">
                    <form>
                        <div className="input-group">
                            <input type='text' name="name" 
                            // value={inputValue} 
                            ref={inputRef}
                            placeholder="enter your name"/>
                            <button type="submit" onClick={generateQR}>Generate QR</button>
                        </div>
                    </form>
                </div>
                <div>
                    {inputValue && 
                        <div>
                            <div className="qr">
                            <QRCode  value={inputValue} />                            
                            </div> 
                            <div className="qr-name">
                                <h3>{inputValue}</h3>
                            </div>
                        </div>
                                               
                    }
                </div>
               
            </div>
            
        </div>
    )
}

export default GenerateQR