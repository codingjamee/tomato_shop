import { useRef } from "react";

const ImgAdd = (props) => {
  const imgRef = useRef();
  const imgId = props.id;

  const saveImgView = (e) => {
    const file = e.target.files[0];
    let reader;
    if (file) {
      reader = new FileReader();
      reader.onloadend = () => {
        console.log(file);
        props.imgHandler(reader.result, e.target.id, file);
      };
    }
    reader.readAsDataURL(file);
  };

  // useEffect(() => {
  //   console.log(props.imgView.imgId);
  // }, [props.imgView.imgId]);

  return (
    <div className="img-add-box">
      {props.imgView[imgId] && (
        <div className="img-view">
          <p>미리보기</p>
          <div className="img-view__wrapper">
            <div className="img-view__img">
              <img src={props.imgView[imgId]} alt="" />
            </div>
            <button
              className="btn img-view__btn"
              onClick={() => {
                props.imgHandler("", imgId);
              }}
            >
              삭제하기
            </button>
          </div>
        </div>
      )}
      {!props.imgView[imgId] && (
        <div className="img-add-box__wrapper">
          <div className="img-add-box__plus">
            <span className="material-symbols-outlined">add_circle</span>
          </div>
          <p>이미지를 추가해주세요</p>
          <label htmlFor={imgId} className="img-add-box__label btn">
            업로드
          </label>
          <input
            id={imgId}
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
