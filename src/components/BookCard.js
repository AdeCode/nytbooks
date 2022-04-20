import React from 'react'

function BookCard({title,author,image}) {
  return (
    <div className='book'>
        <h3>{title}</h3>
        <h4>{author}</h4>
        <div className='img'>
            <img src={image} alt={title}/>
        </div>
    </div>
  )
}

export default BookCard