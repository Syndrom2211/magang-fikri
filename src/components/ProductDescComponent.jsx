import PropTypes from "prop-types"; // Import prop-types
import { productDescriptions } from "../data/index";

const ProductDescComponent = ({ page }) => {
  const product = productDescriptions.find((item) => item.page === page);

  return (
    <div className="product-desc">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </div>
  );
};

// Add prop type validation
ProductDescComponent.propTypes = {
  page: PropTypes.string.isRequired, // Validate that 'page' is a required string
};

export default ProductDescComponent;