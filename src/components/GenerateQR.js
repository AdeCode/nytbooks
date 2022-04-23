import React, { useState, useRef } from "react"
import QRCode from "react-qr-code";
import Loader from 'react-js-loader'


function GenerateQR (){
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef(null)
    const [loading, setIsLoading] = useState(false)


    const generateQR = (e) => {
        e.preventDefault()
        setIsLoading(true)
        // console.log(inputRef.current.value)
        setInputValue(inputRef.current.value)
        setIsLoading(false)
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
                            <button type="submit" onClick={generateQR}>
                                {loading ? 
                                    <Loader type="spinner-default" bgColor={"#00008B"} title={"Loading..."} color={'#FFFFFF'} size={50} />
                                    :
                                    <h2 style={{fontSize: '2rem'}}>Generate QR</h2>
                                }
                            </button>
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