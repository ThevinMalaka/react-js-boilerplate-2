import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import LogoUrl from "../../assets/images/logo/logo.png";
import { TopNavBarContainer } from "./topNavBar.style";

const TopNavBar = () => {
  const { t } = useTranslation();
  return (
    <Row>
      <TopNavBarContainer>
        <div dir="rtl" className="top-nav-bar-image">
          <img className="logo" alt="Follo Logo" src={LogoUrl} height="54" />
          <span>{t("top_bar_title")}</span>
          <span>lllllllllll</span>
          <span>kkkkkkkkkkk</span>
        </div>
      </TopNavBarContainer>
    </Row>
  );
};

export default TopNavBar;
