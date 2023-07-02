import { Route, Routes } from "react-router";

import Header from "./components/header/Header";
import Home from "./components/home/Home.jsx";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
