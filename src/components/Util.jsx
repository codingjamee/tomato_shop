import { Link } from "react-router-dom";

import "../styles/style.scss";

const Util = () => {
  return (
    <ul className="list head__list">
      <li className="head__item">
        <Link to="/" className="link head__link">
          로그인
        </Link>
      </li>
      <li className="head__item">
        <Link to="/" className="link head__link">
          회원가입
        </Link>
      </li>
      <li className="head__item">
        <Link to="/" className="link head__link">
          장바구니
        </Link>
      </li>
      <li className="head__item">
        <Link to="/" className="link head__link">
          주문/배송
        </Link>
      </li>
      <li className="head__item">
        <Link to="/" className="link head__link">
          마이페이지
        </Link>
      </li>
    </ul>
  );
};
export default Util;
