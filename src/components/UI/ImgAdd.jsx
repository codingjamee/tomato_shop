const ImgAdd = () => {
  return (
    <div className="img-add-box">
      <form className="img-add-box__form">
        <p>이미지를 추가해주세요</p>
        <div className="img-add-box__plus">
          <span className="material-symbols-outlined">add_circle</span>
        </div>
        <label htmlFor="imgAdd" className="img-add-box__label btn">
          업로드
        </label>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          id="imgAdd"
        />
      </form>
    </div>
  );
};

export default ImgAdd;
