import "./Backdrop.css";

const Backdrop = ({ show }) => {
    return show && <div className="backDrop"></div>
}

export default Backdrop;
