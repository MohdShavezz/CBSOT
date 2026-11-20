import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Car from './components/Car';
import Bike from './components/Bike';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* Navigation */}
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} >
                <Route path='/about/bike' element={<Bike/>} />
                <Route path='/about/car' element={<Car/>} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App