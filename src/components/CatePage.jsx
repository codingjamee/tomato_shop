import { useEffect, useState } from "react";

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
          {loadedCates[0]?.results &&
            loadedCates[0]?.results.map((dummy) => (
              <article>
                <div className="page__body">
                  <div className="card">
                    <img
                      src={dummy.card__imgUrl}
                      alt=""
                      className="card__img"
                    />
                    <h2 className="card__title">{dummy.card_title}</h2>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </section>
    </>
  );
};

export default CatePage;
