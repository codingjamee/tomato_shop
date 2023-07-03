import { Link } from "react-router-dom";

const SubBnr = () => {
  return (
    <div className="banner__wrapper">
      <img
        className="banner__img"
        src="https://picsum.photos/id/216/350/350"
        alt=""
      />
      <div className="banner__text">
        <h3>New arrivals</h3>
        <p></p>
        <Link />
      </div>
    </div>
  );
};

export default SubBnr;
