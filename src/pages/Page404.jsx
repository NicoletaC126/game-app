import { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ThemeContext } from "../store/theme/context";

const Page404 = () => {
  const { themeState } = useContext(ThemeContext);

  return (
    <div className={`d-flex flex-column bg-${themeState}`}>
      <Header />
      <h1
        style={{
          color: "#fb8500",
          flexGrow: 1,
          height: "100vh",
          alignContent: "center",
          padding: 20,
        }}
      >
        Ne pare rau dar pagina nu exista! :(
      </h1>
      <Footer />
    </div>
  );
};

export default Page404;
