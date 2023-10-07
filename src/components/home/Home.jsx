import HeroSection from "./HeroSection";
import FitnessTraining from "../fitnessTraining/FitnessTraining";
import Panner from "./Panner";
import Benefits from "./Benefits";
import About from "./About";
import Swiper from "./Swiper";
import Trainers from "../trainers/Trainers";
import GymAmenities from "./GymAmenities";
import OurPlans from "./OurPlans";
import ArticlesNews from "./ArticlesNews";

const Home = () => {
  return (
    <div className={` margin-sections `}>
      <HeroSection />
      <FitnessTraining />
      <Panner />
      <About />
      <Benefits />
      <Swiper />
      <Trainers />
      <GymAmenities />
      <OurPlans />
      <ArticlesNews />
    </div>
  );
};

export default Home;
