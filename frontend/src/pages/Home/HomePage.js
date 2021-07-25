import "./HomePage.css";
import Product from "../../components/Product/Product";

const Home = () => {
    return <div className="homePage">
      <h2 className="homePage__title">Latest Products</h2>
        <div className="homePage__products">
          <Product />  
        </div> 
    </div>
}

export default Home;
