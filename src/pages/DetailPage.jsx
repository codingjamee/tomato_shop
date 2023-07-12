import { useParams } from "react-router-dom";
import { useEffect } from "react";
import RightFix from "../components/Rightfix";
import Contents from "../components/Contents";

//제품을 선택하면 나오는 상세페이지
// /category명/제품의아이디

const DetailPage = () => {
  const params = useParams();

  useEffect(() => {
    console.log("load datas");
    fetch(`http://localhost:8080/${params.id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {});
  }, []);

  return (
    <>
      <RightFix />
      <Contents />
    </>
  );
};
export default DetailPage;
