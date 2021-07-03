import "./Navbar.css"
import { Link } from "react-router-dom"; 

const Navbar = ({click}) => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
            <Link to="/">
                <h2>Shopping</h2>
            </Link>
            </div>

            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="navbar__link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            <span className="cartLogo__badge">0</span>
                        </span>
                       
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
            </ul>

            <div className="hamburger__menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar
