import { Link } from "react-router-dom";
import "../styles/style.scss";

const Nav = () => {
  return (
    <ul className="list nav__list">
      <li className="nav__item">
        <Link to="/best" className="link nav__link">
          베스트30
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/new" className="link nav__link">
          신상품
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/basic" className="link nav__link">
          베이직
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/outer" className="link nav__link">
          아우터
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/top" className="link nav__link">
          상의
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/dress" className="link nav__link">
          원피스/치마
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/bottom" className="link nav__link">
          하의
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/set" className="link nav__link">
          세트
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/sale" className="link nav__link">
          세일
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
