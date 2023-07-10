import "../styles/style.scss";
import Slider from "./Slider";
import SubBnr from "./SubBnr";

const Home = () => {
  return (
    <section className="content">
      <div className="content__wrapper">
        <article className="slider">
          <Slider />
        </article>
        <article className="banner">
          <SubBnr text="New arrivals" url="/new" />
          <SubBnr text="Best 30" url="/best" />
        </article>
        <article>
          <p>지금 진행중인 이벤트</p>
        </article>
      </div>
    </section>
  );
};

export default Home;
