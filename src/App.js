import { Route, Routes } from "react-router";

import Header from "./components/header/Header";
import Home from "./components/home/Home.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
