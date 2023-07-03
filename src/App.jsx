import { Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/new-arrival" element={<NewArrival />} /> */}
      </Routes>
    </>
  );
}

export default App;
