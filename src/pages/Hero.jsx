import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { baseUrl, useFetch } from "../hooks/useFetch";
import Spinner from "react-bootstrap/Spinner";
import ProgressBar from "react-bootstrap/ProgressBar";
import Badge from "react-bootstrap/Badge";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useContext } from "react";
import { FavoritesContext } from "../store/favorites/context";
import { addToFavorite } from "../store/favorites/actions";
import { TeamsContext } from "../store/teams/context";
import { addToTeam } from "../store/teams/actions";

const maxHealth = 200;
const maxAttackRange = 1000;
const maxDefault = 100;

const Hero = () => {
  const { id } = useParams();
  const allHeroStats = useFetch(baseUrl + "/heroStats");
  const { favoritesState, favoritesDispatch } = useContext(FavoritesContext);
  const { teamsState, teamsDispatch } = useContext(TeamsContext);

  let heroStats;

  if (allHeroStats.length > 0) {
    heroStats = allHeroStats?.find((hero) => hero.id === +id);
  }

  return (
    <Layout>
      {heroStats === undefined ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div className="d-flex flex-column gap-5 w-100">
          <h1>
            {heroStats["localized_name"]}
            <Badge bg="success">{heroStats["attack_type"]}</Badge>
          </h1>

          <h3>Caracteristici de baza</h3>

          <ProgressBar
            variant="success"
            now={heroStats["base_health"]}
            label={`Viata ${heroStats["base_health"]} / ${maxHealth}`}
            style={{ fontWeight: "bold" }}
            max={maxHealth}
          />
          <ProgressBar
            variant="info"
            now={heroStats["base_mana"]}
            label={`Mana ${heroStats["base_mana"]} / ${maxDefault}`}
            style={{ fontWeight: "bold" }}
          />
          <ProgressBar
            variant="danger"
            now={heroStats["base_attack_max"]}
            label={`Atac ${heroStats["base_attack_max"]} / ${maxDefault}`}
            style={{ fontWeight: "bold" }}
          />
          <ProgressBar
            variant="warning"
            now={heroStats["attack_range"]}
            label={`Range ${heroStats["attack_range"]} / ${maxAttackRange}`}
            style={{ fontWeight: "bold", color: "black" }}
            max={maxAttackRange}
          />

          <ButtonGroup className="w-25">
            <Button
              onClick={() => {
                console.log("clicked");
                const favHero = {
                  id,
                  name: heroStats["localized_name"],
                };
                favoritesDispatch(addToFavorite(favHero));
              }}
              disabled={favoritesState.some((el) => el.id === id)}
            >
              Adauga la favorite
            </Button>
            <DropdownButton
              as={ButtonGroup}
              title="Adauga in echipa"
              id="bg-nested-dropdown"
              disabled={
                teamsState.dire.some((el) => el.id === id) ||
                teamsState.radiant.some((el) => el.id === id)
              }
            >
              <Dropdown.Item
                eventKey="1"
                onClick={(e) => {
                  const value = e.currentTarget.textContent.toLocaleLowerCase();
                  teamsDispatch(
                    addToTeam(value, {
                      id,
                      name: heroStats["localized_name"],
                    })
                  );
                }}
                disabled={teamsState.radiant.length === 5}
              >
                RADIANT
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="2"
                onClick={(e) => {
                  const value = e.currentTarget.textContent.toLocaleLowerCase();
                  teamsDispatch(
                    addToTeam(value, {
                      id,
                      name: heroStats["localized_name"],
                    })
                  );
                }}
                disabled={teamsState.dire.length === 5}
              >
                DIRE
              </Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
        </div>
      )}
    </Layout>
  );
};

export default Hero;
