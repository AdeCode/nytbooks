import axios from "axios";
require("dotenv").config()

// const key = '7exKAJ1VAViKPeQXK5MpK1VXHaXn25sP'

export default axios.create({
    baseURL: `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.API_KEY}`,
    headers:{
        "Content-type" : "application/json",
    },
    params:{
        api_key: process.env.API_KEY,
    }
})