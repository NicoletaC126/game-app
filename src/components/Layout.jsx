import { Container } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import { useContext } from "react";
import { ThemeContext } from "../store/theme/context";

const Layout = ({ children, customClass = "" }) => {
  const { themeState } = useContext(ThemeContext);
  return (
    <div className={`d-flex flex-column vh-100 bg-${themeState}`}>
      <Header />
      <Container
        className={`d-flex flex-grow-1 ${customClass} bg-${themeState} text-${
          themeState === "light" ? "dark" : "light"
        }`}
      >
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
