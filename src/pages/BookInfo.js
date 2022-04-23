import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'


function BookInfo() {
  let {rank} = useParams()
  const [book, setBook] = useState([])
  const [books, setBooks] = useState([])
  const [loading, setIsLoading] = useState(true)
  const key = '7exKAJ1VAViKPeQXK5MpK1VXHaXn25sP'


  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${key}`)
        const json = await response.json()
        setBooks(json.results.books)
       
    }

    fetchData()
    //getBooks()
    // getBookInfo(rank)
  }, [rank])

  const getBooks = () => {
    axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${key}`)
    .then(response => {
        setBooks(response.data.results.books)
        console.log(books)
        setIsLoading(false)
      })
}

const getBookInfo = (rank) => {    
    let selectedBook = books.filter(book => book.rank === rank)
    setBook(selectedBook)
    console.log(selectedBook)
    return selectedBook
  }
  
  return (
    <div>
        <div className='book-title'><h2>BookInfo</h2></div>
        {books &&
            books.map(book => 
                book.rank === rank ? (
                    <h2>{book.title}</h2>
                )
                :
                ''
            )
        }
        
        
    </div>
  )
}

export default BookInfo