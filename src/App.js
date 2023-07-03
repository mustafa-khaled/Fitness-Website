import { Route, Routes } from "react-router";

import Header from "./components/header/Header";
import Home from "./components/home/Home.jsx";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
