import React, { useState,useEffect } from 'react'
import Loader from 'react-js-loader'
import {useDispatch, useSelector} from 'react-redux'
import {increment, decrement} from '../actions'

function About() {
  const [loading, setIsLoading] = useState(true)

  const loaded = () => {
      setIsLoading(false)
  }

  useEffect(() => {
      setTimeout(loaded, 1000)
  }, [])
  
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch()

  return (
    <div className='content'>
        {loading ? 
            <div className='loader'>
                <Loader type="spinner-default" bgColor={"#00008B"} title={"Loading..."} color={'#FFFFFF'} size={100} />
            </div>
        :
            <>
                <div style={{color:'white', fontSize:'24px'}}>
                <div>
                    Counter: {counter}
                    <button onClick={()=>dispatch(increment(2))}>+</button>
                    <button onClick={()=>dispatch(decrement())}>-</button>
                </div>
                <h2>About the app</h2>
                </div>
            </>
        }
    </div>
  )
}

export default About