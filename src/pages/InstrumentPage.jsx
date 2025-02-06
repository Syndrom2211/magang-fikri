import ProductDescComponent from "../components/ProductDescComponent";
import HowItWorksComponent from "../components/HowItWorksComponent";
import PriceListComponent from "../components/PriceListComponent";

const InstrumentPage = () => {
  return (
    <div>
      <ProductDescComponent page="instrument" />
      <HowItWorksComponent page="instrument" />
      <PriceListComponent page="instrument" />
    </div>
  );
};

export default InstrumentPage;