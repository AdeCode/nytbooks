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
            <Loader type="spinner-default" bgColor={"#00008B"} title={"spinner-default"} color={'#FFFFFF'} size={100} />
        :
            <h2>About the app</h2>
        }
    </div>
  )
}

export default About