import PropTypes from "prop-types"; // Import prop-types
import { howItWorksSteps } from "../data/index";

const HowItWorksComponent = ({ page }) => {
  const steps = howItWorksSteps.find((item) => item.page === page).steps;

  return (
    <div className="how-it-works">
      <h2>How It Works</h2>
      <ol>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

// Add prop type validation
HowItWorksComponent.propTypes = {
  page: PropTypes.string.isRequired, // Validate that 'page' is a required string
};

export default HowItWorksComponent;