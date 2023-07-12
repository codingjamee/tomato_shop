import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CatePage = (props) => {
  const [loadedCates, setLoadedCates] = useState([]);
  // 백엔드 가져오기
  //요청하는 타이틀마다 다르게 요청해야 함
  useEffect(() => {
    console.log("load datas");
    fetch(`http://localhost:8080/${props.url}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const cates = [];
        cates.push(data);
        setLoadedCates(cates);
      });
  }, [props.url]);

  return (
    <>
      <section className="content">
        <div className="content__wrapper">
          <article className="page__title">
            {loadedCates[0]?.title && <h1>{loadedCates[0]?.title}</h1>}
          </article>
          {/* map을 사용해서 정보를 뿌려줌
                정보는 백엔드에서 요청해 받아온 것 
              */}
          <article className="page__wrapper">
            <ul className="page__body">
              {loadedCates[0]?.results &&
                loadedCates[0]?.results.map((dummy) => (
                  <li className="card" key={dummy.id}>
                    {/* 어떤 크기의 이미지를 넣어도 맞게 렌더링 되어야....! */}
                    <div className="card__wrapper">
                      <Link to={`/${dummy.id}`}>
                        <img
                          src={dummy.card__imgUrl}
                          alt=""
                          className="card__img"
                        />
                      </Link>
                    </div>
                    <h2 className="card__title">{dummy.card_title}</h2>
                  </li>
                ))}
            </ul>
          </article>
        </div>
      </section>
    </>
  );
};

export default CatePage;
