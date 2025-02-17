import PropTypes from "prop-types";
import { priceLists, TextContent } from "../data/index";
import { useNavigate } from "react-router-dom";

const PriceListComponent = ({ page, language }) => {
  const navigate = useNavigate();
  const plans =
    priceLists[language]?.find((item) => item.page === page)?.plans || [];

  const handleCheckout = (product) => {
    navigate("/checkout", {
      state: {
        plan: { id: product.id, name: product.name, price: product.price },
        page: "catalog", // or whatever identifier you want
        language: language, // Pass the language prop
      },
    });
  };

  return (
    <div className="price-list">
      <h2>{TextContent[language].daftar}</h2>
      <div className="plans">
        {plans.map((plan, index) => (
          <div key={index} className="plan">
            <h3>{plan.name}</h3>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <p>{plan.price}</p>
            <button
              className="order-button"
              onClick={() => handleCheckout(plan)}>
              {TextContent[language].book}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

PriceListComponent.propTypes = {
  page: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default PriceListComponent;
