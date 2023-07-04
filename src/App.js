import { Route, Routes } from "react-router";

import Header from "./components/header/Header";
import Home from "./components/home/Home.jsx";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Classes from "./components/classes/Classes";
import YogaClass from "./components/yogaClass/YogaClass";
import TrainersPage from "./components/trainersPage/TrainersPage";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="classes" element={<Classes />} />
        <Route path="yogaClass" element={<YogaClass />} />
        <Route path="trainers" element={<TrainersPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
