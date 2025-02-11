import PropTypes from "prop-types"; 
import { priceLists } from "../data/index";
import { useNavigate } from "react-router-dom";

const PriceListComponent = ({ page, language }) => {
  const navigate = useNavigate();
  const plans = priceLists[language]?.find((item) => item.page === page)?.plans || [];

  const handleOrder = (plan) => {
    navigate('/checkout', { 
      state: { 
        plan: plan,
        page: page,
        language: language
      } 
    });
  };

  return (
    <div className="price-list">
      <h2>{language === "id" ? "Daftar Harga" : "Price List"}</h2>
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
            <button className="order-button"
              onClick={() => handleOrder(plan)}>
              {language === "id" ? "Pesan Sekarang" : "Order Now"}
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
