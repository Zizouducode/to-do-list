import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header>
      <FontAwesomeIcon className="icon" icon="fa-list" />
      <div>Todo List</div>
    </header>
  );
};

export default Header;
