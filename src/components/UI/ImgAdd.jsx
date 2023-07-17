import { useRef } from "react";

const ImgAdd = (props) => {
  const imgRef = useRef();

  const saveImgView = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      props.setImgView(reader.result);
    };
  };
  return (
    <div className="img-add-box">
      {props.imgView && (
        <div className="img-view">
          <p>미리보기</p>
          <div className="img-view__wrapper">
            <div className="img-view__img">
              <img src={props.imgView} alt="" />
            </div>
            <button
              className="btn img-view__btn"
              onClick={() => {
                props.setImgView();
              }}
            >
              삭제하기
            </button>
          </div>
        </div>
      )}
      {!props.imgView && (
        <div className="img-add-box__wrapper">
          <div className="img-add-box__plus">
            <span className="material-symbols-outlined">add_circle</span>
          </div>
          <p>이미지를 추가해주세요</p>
          <label htmlFor="imgAdd" className="img-add-box__label btn">
            업로드
          </label>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            id="imgAdd"
            onChange={saveImgView}
            ref={imgRef}
          />
        </div>
      )}
    </div>
  );
};

export default ImgAdd;
