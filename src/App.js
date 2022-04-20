import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Book from './pages/Book';
import Home from './pages/Home';
import NewNav from './components/NewNav';

function App() {
  return (
      <Router>
      {/* <Navbar/> */}
      <NewNav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/books' element={<Book/>}/>
        </Routes>
      </Router>  
  );
}

export default App;
