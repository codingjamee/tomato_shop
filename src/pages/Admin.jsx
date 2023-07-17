import { useState, useRef } from "react";
import ImgAdd from "../components/UI/ImgAdd";

const Admin = () => {
  const [imgView, setImgView] = useState("");
  const [moreImgView, setMoreImgView] = useState("");
  const moreImgRef = useRef();

  return (
    <section className="content">
      <div className="content__wrapper">
        <form>
          <table className="table">
            <colgroup>
              <col className="table_col-1" width="20%" />
              <col className="table_col-2" width="80%" />
            </colgroup>
            <thead className="table__head">
              <tr>
                <th colSpan={4}>제품 등록하기</th>
              </tr>
            </thead>
            <tbody className="table__body">
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
                  <div className="table__data--add">
                    <ImgAdd imgView={imgView} setImgView={setImgView} />
                  </div>
                </td>
              </tr>
              <tr className="table__row">
                <td className="table__title">
                  <label htmlFor="imgUrl">추가이미지</label>
                </td>
                <td className="table__data">
                  <div className="table__data--add">
                    <ImgAdd imgView={imgView} setImgView={setImgView} />
                    <ImgAdd imgView={imgView} setImgView={setImgView} />
                    <ImgAdd imgView={imgView} setImgView={setImgView} />
                    <ImgAdd imgView={imgView} setImgView={setImgView} />
                  </div>
                </td>
              </tr>
              <tr className="table__row">
                <td className="table__title">
                  <label htmlFor="imgUrl">제품 설명</label>
                </td>
                <td className="table__data">
                  <div className="table__textarea-wrapper">
                    <textarea
                      name=""
                      id=""
                      rows="10"
                      className="table__textarea"
                    ></textarea>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <button
            className="btn form__button"
            type="submit"
            onSubmit={() => {
              console.log();
            }}
          >
            등록하기
          </button>
        </form>
      </div>
    </section>
  );
};

export default Admin;
