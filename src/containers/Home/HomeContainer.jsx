import CategoryBlockContainer from "./CategoryBlockContainer";
import HeroSectionContainer from "./HeroSectionContainer";
import OffersSection from "../../components/home/OffersSection";

const HomeContainer = () => {
  return (
    <div className="space-y-10">
      <HeroSectionContainer />
      <CategoryBlockContainer />
    </div>
  );
};

export default HomeContainer;
