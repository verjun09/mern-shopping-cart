import './SideDrawer.css';
import { Link } from 'react-router-dom';

const SideDrawer = ({show}) => {
    const sideDrawerClass = ['sideDrawer'];

    console.log(show)
    if(show) {
        sideDrawerClass.push("show");
    }

    return <div className={ sideDrawerClass.join(" ") }>
        <ul className="sideDrawer__links">
            <li>
                <Link to="/cart">
                    <i className="fas fa-shopping-cart"></i>
                    <span>Cart <span className="sideDrawer__cartBadge">0</span></span>
                </Link>
            </li>
            <li>
                <Link to="/">Shop</Link>
            </li>
        </ul>

    </div>;
}

export default SideDrawer;
