import './SideDrawer.css';
import { Link } from 'react-router-dom';

const SideDrawer = ({show, click}) => {
    const sideDrawerClass = ['sideDrawer'];

    if(show) {
        sideDrawerClass.push("show");
    }

    return <div className={ sideDrawerClass.join(" ") }>
        <ul className="sideDrawer__links">
            <li>
                <Link to="/cart">
                    <i className="fas fa-shopping-cart"></i>
                    <span>Cart <span className="sideDrawer__cartBadge"></span></span>
                </Link>
            </li>
            <li>
                <Link to="/">Shop</Link>
            </li>
        </ul>

    </div>;
}

export default SideDrawer;
