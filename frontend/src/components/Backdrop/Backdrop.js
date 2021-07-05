import "./Backdrop.css";

const Backdrop = ({ show, click }) => {
    return show && <div className="backDrop" onClick={ click }></div>
};

export default Backdrop;
