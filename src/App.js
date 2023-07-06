import React, { Suspense } from "react";
import { Route, Routes } from "react-router";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const Home = React.lazy(() => import("./components/home/Home.jsx"));
const About = React.lazy(() => import("./components/about/About"));
const Classes = React.lazy(() => import("./components/classes/Classes"));
const YogaClass = React.lazy(() => import("./components/yogaClass/YogaClass"));
const TrainersPage = React.lazy(() =>
  import("./components/trainersPage/TrainersPage")
);
const TrainerSingle = React.lazy(() =>
  import("./components/trainerSingle/TrainerSingle")
);
const Blog = React.lazy(() => import("./components/blog/Blog"));
const BlogSingle = React.lazy(() =>
  import("./components/blogSingle/BlogSingle")
);

const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="classes" element={<Classes />} />
          <Route path="yogaClass" element={<YogaClass />} />
          <Route path="trainers" element={<TrainersPage />} />
          <Route path="singleClass" element={<TrainerSingle />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blogSingle" element={<BlogSingle />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
