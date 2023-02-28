import "./backdrop.styles.scss";

const Backdrop = ({ onClick }) => {
  return <div onClick={onClick} className="backdrop__wrapper" />;
};

export default Backdrop;
