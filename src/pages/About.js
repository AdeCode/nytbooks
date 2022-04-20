import React, { useState,useEffect } from 'react'
import Loader from 'react-js-loader'


function About() {
  const [loading, setIsLoading] = useState(true)

  const loaded = () => {
      setIsLoading(false)
  }

  useEffect(() => {
      setTimeout(loaded, 5000)
  }, [])
  

  return (
    <div className='content'>
        {loading ? 
            <div className='loader'>
                <Loader type="spinner-default" bgColor={"#00008B"} title={"Loading..."} color={'#FFFFFF'} size={100} />
            </div>
        :
            <h2>About the app</h2>
        }
    </div>
  )
}

export default About