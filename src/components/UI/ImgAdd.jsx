import { useState, useRef } from "react";

const ImgAdd = (props) => {
  const [imgView, setImgView] = useState("");
  const imgRef = useRef();

  const saveImgView = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgView(reader.result);
    };

    console.log(imgView);
  };
  return (
    <div className="img-add-box">
      {imgView && (
        <div className="img-view">
          <p>미리보기</p>
          <div className="img-view__wrapper">
            <div className="img-view__img">
              <img src={imgView} alt="" />
            </div>
            <button
              className="btn img-view__btn"
              onClick={() => {
                setImgView();
              }}
            >
              삭제하기
            </button>
          </div>
        </div>
      )}
      {!imgView && (
        <div className="img-add-box__wrapper">
          <div className="img-add-box__plus">
            <span className="material-symbols-outlined">add_circle</span>
          </div>
          <p>이미지를 추가해주세요</p>
          <label htmlFor={props.id} className="img-add-box__label btn">
            업로드
          </label>
          <input
            id={props.id}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={saveImgView}
            ref={imgRef}
          />
        </div>
      )}
    </div>
  );
};

export default ImgAdd;
