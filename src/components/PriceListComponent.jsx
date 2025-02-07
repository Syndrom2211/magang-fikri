import PropTypes from "prop-types"; // Import prop-types
import { priceLists } from "../data/index";

const PriceListComponent = ({ page }) => {
  const plans = priceLists.find((item) => item.page === page).plans;

  return (
    <div className="price-list">
      <h2>Price List</h2>
      <div className="plans">
        {plans.map((plan, index) => (
          <div key={index} className="plan">
            <h3>{plan.name}</h3>
            <p>{plan.price}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

// Add prop type validation
PriceListComponent.propTypes = {
  page: PropTypes.string.isRequired, // Validate that 'page' is a required string
};

export default PriceListComponent;