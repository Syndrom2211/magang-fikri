import ProductDescComponent from "../components/ProductDescComponent";
import HowItWorksComponent from "../components/HowItWorksComponent";
import PriceListComponent from "../components/PriceListComponent";

const LyricsPage = () => {
  return (
    <div>
      <ProductDescComponent page="lyrics" />
      <HowItWorksComponent page="lyrics" />
      <PriceListComponent page="lyrics" />
    </div>
  );
};

export default LyricsPage;