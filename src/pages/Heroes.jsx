import { baseUrl, useFetch } from "../hooks/useFetch";

import { useNavigate } from "react-router-dom";

import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import Header from "../components/Header";
import { useContext } from "react";
import { ThemeContext } from "../store/theme/context";
import Footer from "../components/Footer";

const Heroes = () => {
  const allHeroes = useFetch(`${baseUrl}/heroes`);
  const navigate = useNavigate();
  const { themeState } = useContext(ThemeContext);

  return (
    <div className="d-flex flex-column">
      <Header />

      <div className={`p-5 bg-${themeState}`}>
        {allHeroes.length === 0 ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <Table bordered hover className={`table-${themeState}`}>
            <thead>
              <tr>
                <th>Nume</th>
                <th>Tip atac</th>
                <th>Roluri</th>
              </tr>
            </thead>
            <tbody>
              {allHeroes.map((hero) => (
                <tr
                  key={hero.id}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.cursor = "pointer")
                  }
                  onClick={() => navigate(`/heroStats/${hero.id}`)}
                >
                  <td>{hero["localized_name"]}</td>
                  <td>{hero["attack_type"]}</td>
                  <td>{hero["roles"].join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Heroes;
