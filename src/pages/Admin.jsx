import { useEffect, useReducer, useState } from "react";
import ImgAdd from "../components/UI/ImgAdd";
import Tbody from "../components/Tbody";
import Trow from "../components/Trow";
import TdataTitle from "../components/TdataTitle";
import Tdata from "../components/Tdata";
import Select from "../components/Select";

const optionArray = [
  { val: "", title: "카테고리 선택" },
  { val: "basic", title: "베이직" },
  { val: "outer", title: "아우터" },
  { val: "top", title: "상의" },
  { val: "dress", title: "원피스/치마" },
  { val: "bottom", title: "하의" },
  { val: "set", title: "세트" },
];

const titleReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: action.value.length > 0 };
  }
  if (action.type === "INPUT_BLUR") {
    console.log("input blur");
    console.log(state.isValid);
    return { value: state.value, isValid: state.value.length > 0 };
  }
  return { value: "", isValid: false };
};
const selectReducer = (state, action) => {
  if (action.type === "USER_SELECT") {
    return { value: action.value, isValid: action.value.length > 0 };
  }
  if (action.type === "SELECT_BLUR") {
    console.log("selectblur");
    console.log(state.isValid);
    return { value: state.value, isValid: state.value.length > 0 };
  }
  return { value: "", isValid: false };
};

const Admin = () => {
  const [titleState, dispatchTitle] = useReducer(titleReducer, {
    value: "",
    isValid: false,
  });

  const [selectState, dispatchSelect] = useReducer(selectReducer, {
    value: "",
    isValid: false,
  });
  const [imgView, setImgView] = useState({});

  //title, selectHandler validation check???
  const [formIsValid, setFormIsValid] = useState(false);
  const { isValid: titleIsValid } = titleState;
  const { isValid: selectIsValid } = selectState;

  useEffect(() => {
    console.log("titleIsValid", titleIsValid);
    console.log("selectIsValid", selectIsValid);

    setFormIsValid(titleIsValid && selectIsValid);
    console.log("formIsValid", formIsValid);
  }, [titleIsValid, selectIsValid, formIsValid]);

  const titleValChangeHandler = (e) => {
    dispatchTitle({ type: "USER_INPUT", value: e.target.value });
    console.log("titlechange");
    console.log(titleState);
  };

  const titleBlurHandler = () => {
    dispatchTitle({ type: "INPUT_BLUR" });
  };

  const selectHandler = (e) => {
    dispatchSelect({ type: "USER_SELECT", value: e.target.value });
    console.log("selectchange");

    console.log(selectState);
  };
  const selectBlurHandler = () => {
    dispatchSelect({ type: "SELECT_BLUR" });
  };

  const imgHandler = (imgUrl, imgId) => {
    console.log("imgHandler");
    setImgView({ ...imgView, [imgId]: `${imgUrl}` });
    console.log(imgView);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(titleState, selectState, imgView);
  };

  return (
    <section className="content">
      <div className="content__wrapper">
        <form action="submit" onSubmit={submitHandler}>
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
            <Tbody>
              <Trow>
                <TdataTitle>
                  <label htmlFor="productTitle">상품명</label>
                </TdataTitle>
                <TdataTitle>
                  <div className="table__cate">
                    <input
                      className="table__input"
                      id="productTitle"
                      type="text"
                      onChange={titleValChangeHandler}
                      onBlur={titleBlurHandler}
                      value={titleState.value}
                    />
                    <Select
                      options={optionArray}
                      selectHandler={selectHandler}
                      selectBlurHandler={selectBlurHandler}
                      selectState={selectState}
                    />
                  </div>
                </TdataTitle>
              </Trow>
              <Trow>
                <TdataTitle>기본이미지</TdataTitle>
                <Tdata>
                  <div className="table__data--add">
                    <ImgAdd
                      id="img1"
                      imgHandler={imgHandler}
                      imgView={imgView}
                    />
                  </div>
                </Tdata>
              </Trow>
              <Trow>
                <TdataTitle>
                  <label htmlFor="imgUrl">추가이미지</label>
                </TdataTitle>
                <Tdata>
                  <div className="table__data--add">
                    <ImgAdd
                      id="img2"
                      imgHandler={imgHandler}
                      imgView={imgView}
                    />
                    <ImgAdd
                      id="img3"
                      imgHandler={imgHandler}
                      imgView={imgView}
                    />
                    <ImgAdd
                      id="img4"
                      imgHandler={imgHandler}
                      imgView={imgView}
                    />
                    <ImgAdd
                      id="img5"
                      imgHandler={imgHandler}
                      imgView={imgView}
                    />
                  </div>
                </Tdata>
              </Trow>
              <Trow>
                <TdataTitle>
                  <label htmlFor="imgUrl">제품 설명</label>
                </TdataTitle>
                <Tdata>
                  <div className="table__textarea">
                    <textarea
                      name=""
                      id=""
                      rows="10"
                      className="table__textarea-item"
                    ></textarea>
                  </div>
                </Tdata>
              </Trow>
            </Tbody>
          </table>
          <button
            className="btn form__button"
            type="submit"
            onSubmit={submitHandler}
            disabled={!formIsValid}
          >
            등록하기
          </button>
        </form>
      </div>
    </section>
  );
};

export default Admin;
