import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
    <nav>
        <div className="left">
            <img src="logo.webp" alt="logo" />
        </div>
        <div className="right">
            <div>About</div>
            <div>C</div>
             {/* <Link to="/about">About</Link>
             <Link to="/contact">Contact</Link> */}
        </div>
    </nav>
    </>
  )
}

export default Header