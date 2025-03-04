import { useContext } from "react";
import Layout from "../components/Layout";
import Toast from "react-bootstrap/Toast";
import { TeamsContext } from "../store/teams/context";
import { ThemeContext } from "../store/theme/context";
import { removeFromTeam, removeTeam } from "../store/teams/actions";
import { Button } from "react-bootstrap";
import { Trash3Fill } from "react-bootstrap-icons";
import mapImage from "./dotaMap.png";

const Teams = () => {
  const { teamsState, teamsDispatch } = useContext(TeamsContext);
  const { radiant, dire } = teamsState;
  const { themeState } = useContext(ThemeContext);

  const themeStyle =
    themeState === "light" ? `bg-light text-dark` : "bg-dark text-light";

  return (
    <Layout>
      {radiant?.length === 0 && dire?.length === 0 ? (
        <h1 style={{ alignSelf: "center" }}>Nu exista o echipa creata :(</h1>
      ) : (
        <div className="p-5 w-100 d-flex justify-content-around">
          <div>
            {radiant?.length > 0 && (
              <Toast
                className={themeStyle}
                onClose={() => teamsDispatch(removeTeam("radiant"))}
              >
                <Toast.Header>
                  <strong className="me-auto">RADIANT</strong>
                  <small>Max. 5</small>
                </Toast.Header>
                <Toast.Body className="fs-5">
                  <ul className="d-flex flex-column gap-2">
                    {radiant.map((el) => (
                      <li
                        key={el.id}
                        className="d-flex justify-content-between"
                      >
                        {el.name}
                        <Button
                          className="d-flex"
                          onClick={() =>
                            teamsDispatch(removeFromTeam("radiant", el.id))
                          }
                        >
                          <Trash3Fill />
                        </Button>
                      </li>
                    ))}
                  </ul>
                </Toast.Body>
              </Toast>
            )}
          </div>

          <img src={mapImage} alt="map-image" width={350} height={350} />

          <div>
            {dire?.length > 0 && (
              <Toast
                className={themeStyle}
                onClose={() => teamsDispatch(removeTeam("dire"))}
              >
                <Toast.Header>
                  <strong className="me-auto">DIRE</strong>
                  <small>Max. 5</small>
                </Toast.Header>
                <Toast.Body className="fs-5">
                  <ul className="d-flex flex-column gap-2">
                    {dire.map((el) => (
                      <li
                        key={el.id}
                        className="d-flex justify-content-between"
                      >
                        {el.name}
                        <Button
                          className="d-flex"
                          onClick={() =>
                            teamsDispatch(removeFromTeam("dire", el.id))
                          }
                        >
                          <Trash3Fill />
                        </Button>
                      </li>
                    ))}
                  </ul>
                </Toast.Body>
              </Toast>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Teams;
