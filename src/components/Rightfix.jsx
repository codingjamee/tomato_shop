import "../styles/style.scss";

const RightFix = (props) => {
  return (
    <div className="detail-nav">
      <div className="detail-nav__wrapper">
        <div className="detail-nav__info">
          <h1 className="detail-nav__title">제품명{props.title}</h1>
          <h2>제품가격{props.val}</h2>
        </div>
        <hr />
        <div className="input">
          <div className="input__item">
            <label htmlFor="color">색상</label>
            <select name="color" id="color">
              <option value="">--옵션선택--</option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <div className="input__item">
            <label htmlFor="size">사이즈</label>
            <select name="size" id="size">
              <option value="">--옵션선택--</option>
            </select>
          </div>
        </div>
        <hr />
        <div className="total">
          <p>총 상품금액</p>
        </div>
        <div className="button">
          <button>장바구니</button>
          <button>구매하기</button>
        </div>
      </div>
    </div>
  );
};
export default RightFix;
