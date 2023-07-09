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
        <Route path="/best" element={<CatePage title="best" />} />
        <Route path="/new" element={<CatePage title="신상품" />} />
        <Route path="/basic" element={<CatePage title="베이직" />} />
        <Route path="/outer" element={<CatePage title="아우터" />} />
        <Route path="/top" element={<CatePage title="상의" />} />
        <Route path="/dress" element={<CatePage title="원피스/치마" />} />
        <Route path="/bottom" element={<CatePage title="하의" />} />
        <Route path="/basic" element={<CatePage title="베이직" />} />
        <Route path="/set" element={<CatePage title="세트" />} />
        <Route path="/sale" element={<CatePage title="세일" />} />
      </Routes>
    </>
  );
}

export default App;
