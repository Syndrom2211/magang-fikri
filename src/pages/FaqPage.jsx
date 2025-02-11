import SideBarComponent from "../components/SideBarComponent";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import FAQTableComponent from "../components/FaqComponent";
import "../style/admin.css";

const FaqPage = () => {
  return (
    <div className="dashboard-container">
      <SideBarComponent />
      
      <div className="dashboard-content">
        <MainHeader />

        <div className="dashboard-main">
          <FAQTableComponent />
        </div>

        <MainFooter />
      </div>
    </div>
  );
};

export default FaqPage;
  