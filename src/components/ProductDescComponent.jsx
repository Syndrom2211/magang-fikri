import PropTypes from "prop-types";
import { productDescriptions } from "../data/index";
import "../style/main.css"; 

const ProductDescComponent = ({ page }) => {
  const product = productDescriptions.find((item) => item.page === page);

  return (
    <div className="product-desc d-flex align-items-center">
      {/* Left section: Text */}
      <div className="text-section pe-4"> {/* Add padding-end */}
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description1}</p>
        <p className="product-description">{product.description2}</p>
        <p className="product-description">{product.description3}</p>
      </div>

      {/* Right section: Image */}
      <div className="image-section">
        <img
          src={product.imageUrl}
          alt={`${product.title} Image`}
          className="product-image"
        />
      </div>
    </div>
  );
};

ProductDescComponent.propTypes = {
  page: PropTypes.string.isRequired,
};

export default ProductDescComponent;
