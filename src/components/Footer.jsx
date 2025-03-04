import { useContext } from "react";
import { Container } from "react-bootstrap";
import { ThemeContext } from "../store/theme/context";

const Footer = () => {
  const { themeState } = useContext(ThemeContext);

  return (
    <footer
      className={`text-center fw-bold bg-${themeState} text-${
        themeState === "light" ? "dark" : "light"
      }`}
    >
      <Container>Copyright @2025</Container>
    </footer>
  );
};

export default Footer;
