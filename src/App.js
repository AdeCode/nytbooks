import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Book from './pages/Book';
import Home from './pages/Home';
import NewNav from './components/NewNav';
import BookInfo from './pages/BookInfo';
import GenerateQR from './components/GenerateQR';
import Register from './pages/Register';

function App() {
  return (
      <Router>
      {/* <Navbar/> */}
      <NewNav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/books' element={<Book/>}/>
          <Route path='/bookinfo/:rank' element={<BookInfo/>}/>
          <Route path='/qr' element={<GenerateQR/>}/>
          <Route path='/contact' element={<Register/>}/>
        </Routes>
      </Router>  
  );
}

export default App;
