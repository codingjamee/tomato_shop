import { useState, useRef } from "react";
import ImgAdd from "../components/UI/ImgAdd";

const Admin = () => {
  const [imgView, setImgView] = useState("");
  const [moreImgView, setMoreImgView] = useState("");
  const imgRef = useRef();
  const moreImgRef = useRef();

  const saveImgView = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    console.log(file);
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgView(reader.result);
    };
  };
  return (
    <section className="content">
      <div className="content__wrapper">
        <form>
          <table className="table">
            <thead>제품 등록하기</thead>
            <tbody>
              <tr className="table__row">
                <td className="table__title">
                  <label htmlFor="productTitle">상품명</label>
                </td>
                <td className="table__data">
                  <input
                    className="table__input"
                    id="productTitle"
                    type="text"
                  />
                </td>
              </tr>
              <tr className="table__row">
                <td className="table__title">기본이미지</td>
                <td className="table__data">
                  {imgView && (
                    <div className="img-view">
                      <img src={imgView} alt="" />
                    </div>
                  )}
                  <ImgAdd />
                </td>
              </tr>
              <tr className="table__row">
                <td className="table__title">
                  <label htmlFor="imgUrl">추가이미지</label>
                </td>
                <td className="table__data table__data--add">
                  {imgView && (
                    <div className="img-view">
                      <img src={imgView} alt="" />
                    </div>
                  )}
                  <ImgAdd />
                  <ImgAdd />
                  <ImgAdd />
                  <ImgAdd />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <button className="btn form__button" type="submit">
          등록하기
        </button>
      </div>
    </section>
  );
};

export default Admin;
