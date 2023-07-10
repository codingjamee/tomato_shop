import { Link } from "react-router-dom";

const SubBnr = (props) => {
  return (
    <div className="banner__wrapper">
      <img
        className="banner__img"
        src="https://picsum.photos/id/216/350/350"
        alt=""
      />
      <div className="banner__text">
        <Link to={props.url} className="banner__link">
          {props.text}
        </Link>
        <p></p>
      </div>
    </div>
  );
};

export default SubBnr;
