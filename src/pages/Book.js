import axios from 'axios'
import React, { useState, useEffect } from 'react'
import BookCard from '../components/BookCard'
import Loader from 'react-js-loader'
import {useNavigate} from 'react-router-dom'

function Book() {
  const [books, setBooks] = useState([])
  const [loading, setIsLoading] = useState(true)
  const key = '7exKAJ1VAViKPeQXK5MpK1VXHaXn25sP'
  const navigate = useNavigate()

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
  
  const getBookInfo = (rank) => {
    let selectedBook = books.filter(book => book.rank === rank)
    console.log(selectedBook)
    //navigate(`/bookinfo/${rank}`)
    // history.pushState(`/bookinfo/${rank}`)
  }

  return (
    <div className='content'>
        {loading ? 
            // <h2>Loading books...</h2>
            <div className='loader'>
                <Loader type="spinner-default" bgColor={"#00008B"} title={"Loading..."} color={'#FFFFFF'} size={80} />
            </div>
            :
            <div className='container'>
              <div className='title'>
                <h1>NEW YORK TIMES BOOKS</h1>
              </div>
              <div className='book-section'>
                {books.map(book => (
                      <BookCard                        
                          image={book.book_image}
                          title={book.title}
                          author={book.author}
                          key={book.rank}
                          rank={book.rank}
                          getBookInfo={() => getBookInfo(book.rank)}
                      />                   
                  ))}
              </div>
                
            </div>
        }        
    </div>
  )
}

export default Book