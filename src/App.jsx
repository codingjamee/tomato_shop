import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import CatePage from "./pages/CatePage";
import DetailPage from "./pages/DetailPage";
import Admin from "./pages/Admin";

function App() {
  const { id } = useParams();
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/best" element={<CatePage url="best" />} />
        <Route path="/new" element={<CatePage url="new" />} />
        <Route path="/basic" element={<CatePage url="basic" />} />
        <Route path="/outer" element={<CatePage url="outer" />} />
        <Route path="/top" element={<CatePage url="top" />} />
        <Route path="/dress" element={<CatePage url="dress" />} />
        <Route path="/bottom" element={<CatePage url="bottom" />} />
        <Route path="/basic" element={<CatePage url="basic" />} />
        <Route path="/set" element={<CatePage url="set" />} />
        <Route path="/sale" element={<CatePage url="sale" />} />
        <Route path="/:id" element={<DetailPage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
