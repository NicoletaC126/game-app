import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

const cardsInfo = [
  {
    id: "heroes",
    path: "/heroes",
    imgSrc:
      "https://i.pinimg.com/736x/35/79/fd/3579fdb7966715b74364f0f4a493d5a2.jpg",
    title: "Eroi",
  },
  {
    id: "favorites",
    path: "/favorites",
    imgSrc:
      "https://cdn.prod.website-files.com/6657421f71dedfccb6c0511b/67885c151dded3938bf73a91_66bea0ae3c351b3f1aa9641a_547-1920x1080-desktop-1080p-dota-2-wallpaper-photo.jpeg",
    title: "Favorite",
  },
  {
    id: "teams",
    path: "/teams",
    imgSrc:
      "https://dota-showcase.com/storage/teamfancontent/season_5/8599101/wallpaper0.png",
    title: "Echipe",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Layout customClass="flex-column align-items-center justify-content-center">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        style={{ width: "1000px", height: "max-content" }}
      >
        {cardsInfo.map((card) => (
          <Carousel.Item
            key={card.id}
            onClick={() => navigate(card.path)}
            onMouseEnter={(e) => (e.currentTarget.style.cursor = "pointer")}
          >
            <img
              className="d-block w-100"
              src={card.imgSrc}
              alt={`${card.id}`}
            />
            <Carousel.Caption style={{ fontWeight: "800" }}>
              <h3>{card.title}</h3>
              <p>Afla mai multe...</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Layout>
  );
};

export default Home;
