import { Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout";
import Home from "./components/Home";
import CatePage from "./components/CatePage";

function App() {
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
      </Routes>
    </>
  );
}

export default App;
