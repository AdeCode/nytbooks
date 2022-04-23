import React from 'react'
import { GiRank3 } from "react-icons/gi"
import { Link } from 'react-router-dom'

function BookCard({title,author,image,rank,getBookInfo}) {
  return (
    <div className='book'>        
        <div className='img'>
            <img src={image} alt={title}/>
        </div>
        <div className='details'>
            <h3>{title}</h3>
            <h4>{author}</h4>
            <p className='rank'><GiRank3 size={30}/> Rank No {rank}</p>
            <div className='btn' onClick={getBookInfo}>
            <h4>Buy/Info</h4>

              {/* <Link to='/bookinfo/:rank'>
                <h4>Buy/Info</h4>
              </Link>   */}
            </div>
        </div>
        
    </div>
  )
}

export default BookCard