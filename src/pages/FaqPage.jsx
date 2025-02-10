import SideBarComponent from "../components/SideBarComponent";
import FAQTableComponent from "../components/FaqComponent";
import "../style/admin.css";

const FaqPage = () => {
  return (
    <div className="faq-page">
      <SideBarComponent />
      <div className="content">
        <FAQTableComponent />
      </div>
    </div>
  );
};

export default FaqPage;
