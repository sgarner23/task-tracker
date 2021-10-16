import PropTypes from "prop-types";
import Button from "./Button.jsx";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("click");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
