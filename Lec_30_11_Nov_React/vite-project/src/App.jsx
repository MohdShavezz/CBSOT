import { Footer } from "./component/Footer"
import Header from "./component/Header"
import Landing from "./component/Landing"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import Blog from "./pages/Blog";


function App() {

  return (
    <>
      {/* <Header></Header> */}
      {/* <Header/>
      <h1>Get started</h1>
      <Landing/>
      <Footer/> */}

      <BrowserRouter>
        {/* Navigation */}
        <nav>
          <div className="left">
            <img src="logo.webp" alt="logo" />
          </div>
          <div className="right">
            <Link to="/">Home</Link> 
            <Link to="/about">About</Link> 
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blog</Link>
          </div>
        </nav>


        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
