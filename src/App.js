import { Container, Row, Col } from "react-bootstrap";

import Router from "./navigation/routers";
import TopNavBar from "./components/topNavBar";
// import SideBar from "./Components/SideBar";

import "./i18n"; // use for import translation file
import useWindowDimensions from "./utils/useWindowDimensions";

const App = () => {
  const { height, width } = useWindowDimensions();
  console.log("heightheightheightheight 1", height);
  console.log("heightheightheightheight 2", width);
  return (
    <>
      <Container fluid className="main-container">
        <Row>
          <Col>{/* <SideBar /> */}</Col>
          <Col>
            <TopNavBar />
            <div className="main-router-container">
              <Router />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
