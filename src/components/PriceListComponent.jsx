import PropTypes from "prop-types"; 
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
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <p>{plan.price}</p>
            <button className="order-button">Pesan Sekarang</button>
          </div>
        ))}
      </div>
    </div>
  );
};

PriceListComponent.propTypes = {
  page: PropTypes.string.isRequired, 
};

export default PriceListComponent;
