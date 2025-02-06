import ProductDescComponent from "../components/ProductDescComponent";
import HowItWorksComponent from "../components/HowItWorksComponent";
import PriceListComponent from "../components/PriceListComponent";

const SoundPage = () => {
  return (
    <div>
      <ProductDescComponent page="sound" />
      <HowItWorksComponent page="sound" />
      <PriceListComponent page="sound" />
    </div>
  );
};

export default SoundPage;