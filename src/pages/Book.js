import axios from 'axios'
import React, { useState, useEffect } from 'react'
import BookCard from '../components/BookCard'
import Loader from 'react-js-loader'

function Book() {
  const [books, setBooks] = useState([])
  const [loading, setIsLoading] = useState(true)
  const key = '7exKAJ1VAViKPeQXK5MpK1VXHaXn25sP'

  useEffect(() => {
    getBooks()
  }, [])

  const getBooks = () => {
      axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${key}`)
      .then(response => {
          setBooks(response.data.results.books)
          console.log(response.data.results.books)
          setIsLoading(false)
        })
  }
  
  return (
    <div className='content'>
        {loading ? 
            // <h2>Loading books...</h2>
            <Loader type="spinner-default" bgColor={"#00008B"} title={"spinner-default"} color={'#FFFFFF'} size={80} />
            :
            <div className='container'>
                {books.map(book => (
                    <BookCard
                        title={book.title}
                        author={book.author}
                        image={book.book_image}
                    />
                    // <div>
                    //     <h5>Title: {book.title}</h5>
                    // </div>
                ))}
            </div>
        }        
    </div>
  )
}

export default Book