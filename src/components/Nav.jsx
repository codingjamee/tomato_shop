import { Link } from "react-router-dom";
import "../styles/style.scss";

const Nav = () => {
  return (
    <ul className="list nav__list">
      <li className="nav__item">
        <Link to="/" className="link nav__link">
          베스트30
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/" className="link nav__link">
          신상품
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/" className="link nav__link">
          베이직
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/" className="link nav__link">
          아우터
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/" className="link nav__link">
          상의
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/" className="link nav__link">
          원피스/치마
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/" className="link nav__link">
          하의
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/" className="link nav__link">
          세트
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/" className="link nav__link">
          세일
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
