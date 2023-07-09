import { useEffect, useState } from "react";

const DUMMY = [
  {
    card__imgUrl: "https://picsum.photos/id/233/350/350",
    card_title: "타이틀1",
  },
  {
    card__imgUrl: "https://picsum.photos/id/253/350/350",
    card_title: "타이틀2",
  },
];
const CatePage = (props) => {
  const [loadedCates, setLoadedCates] = useState([]);
  // 백엔드 가져오기
  //요청하는 타이틀마다 다르게 요청해야 함
  useEffect(() => {
    console.log("load datas");
    fetch(`http://localhost:8080/${props.title}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const cates = [];
        cates.push(data);
        setLoadedCates(cates);
      });
  }, []);

  return (
    <section className="content">
      <div className="content__wrapper">
        <article className="page__title">
          <h1>{props.title}</h1>
        </article>
        {/* map을 사용해서 정보를 뿌려줌
        정보는 백엔드에서 요청해 받아온 것 
         */}
        <article>
          {loadedCates[0]?.results &&
            loadedCates[0]?.results.map((dummy) => (
              <li key={dummy.card__title}>
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
              </li>
            ))}
        </article>
      </div>
    </section>
  );
};

export default CatePage;
