import "../styles/style.scss";
import Slider from "./Slider";
import SubBnr from "./SubBnr";

const Home = () => {
  return (
    <section className="contents">
      <article className="slider">
        <Slider />
      </article>
      <article className="banner">
        <SubBnr />
        <SubBnr />
      </article>
    </section>
  );
};

export default Home;
