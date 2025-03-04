import { useContext } from "react";
import Layout from "../components/Layout";
import ListGroup from "react-bootstrap/ListGroup";
import { FavoritesContext } from "../store/favorites/context";
import { ThemeContext } from "../store/theme/context";
import { Button } from "react-bootstrap";
import { HeartFill, Trash3Fill } from "react-bootstrap-icons";
import { removeFromFavorite } from "../store/favorites/actions";

const Favorites = () => {
  const { favoritesState, favoritesDispatch } = useContext(FavoritesContext);
  const { themeState } = useContext(ThemeContext);

  const themeStyle =
    themeState === "light" ? "bg-light text-dark" : "bg-dark text-light";

  return (
    <Layout>
      {favoritesState.length === 0 ? (
        <h1 style={{ alignSelf: "center" }}>
          Nu ai adaugat nimic la favorite :(
        </h1>
      ) : (
        <ListGroup className={`w-100`}>
          {favoritesState.map((fav) => (
            <ListGroup.Item
              key={fav.id}
              className={`d-flex justify-content-between align-items-center ${themeStyle}`}
            >
              <div className="d-flex gap-3 align-items-center">
                <HeartFill />
                {fav.name}
              </div>

              <Button
                className="d-flex"
                onClick={() => favoritesDispatch(removeFromFavorite(fav.id))}
              >
                <Trash3Fill />
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Layout>
  );
};

export default Favorites;
