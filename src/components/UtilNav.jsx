import { Link } from "react-router-dom";
import "../styles/style.scss";

const UtilNav = () => {
  return (
    <ul className="list util-nav__list">
      <li className="util-nav__item">
        <Link to="/" className="link util-nav__link">
          공지사항
        </Link>
      </li>
      <li className="util-nav__item">
        <Link to="/" className="link util-nav__link">
          질의응답
        </Link>
      </li>
    </ul>
  );
};

export default UtilNav;
