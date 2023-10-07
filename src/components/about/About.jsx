import HeroSection from "./HeroSection";
import Values from "./Values";
import HeroImages from "./HeroImages";
import GymStory from "./GymStory";
import Trainers from "../trainers/Trainers";

const About = () => {
  return (
    <div>
      <HeroSection />
      <HeroImages />
      <GymStory />
      <Values />
      <Trainers />
    </div>
  );
};

export default About;
