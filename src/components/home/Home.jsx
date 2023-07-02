import FirstSection from "./FirstSection";
import FivethSection from "./FivethSection";
import FourthSection from "./FourthSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import Sixth from "./Sixth";
import Seventh from "./Seventh";
import Eighth from "./Eighth";
import Nineth from "./Nineth";

const Home = () => {
  return (
    <div className={` margin-sections `}>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FivethSection />
      <Sixth />
      <Seventh />
      <Eighth />
      <Nineth />
    </div>
  );
};

export default Home;
