import { Link } from "react-router-dom";
import  './Navbar.css'
function Navbar() {
  return <header className="header">
        <div className="header__container container">
            <Link to="/home" className="text-black font-bold">
            <img src="images/svg/sitenavologo.svg" alt="" />
            </Link>
            <nav className="sitenav">
                <ul className="sitenav__list">
                    <li className="sitenav__item">
                        <Link to="/features" className="sitenav__link">Features</Link>
                    </li>
                    <li className="sitenav__item">
                        <Link to="/pricing" className="sitenav__link">Pricing</Link>
                    </li>
                    <li className="sitenav__item">
                        <Link to="/resources" className="sitenav__link">Resources</Link>
                    </li>
                </ul>
            </nav>
           <div className="flex justify-between items-center">
           <Link className="login" to="#">Login</Link>
            <Link className="header__button button" to="">Sign Up</Link>
           </div>
            <img className="burger" src="images/svg/burger.svg" alt=""/>
        </div>
    </header>
}

export default Navbar;
