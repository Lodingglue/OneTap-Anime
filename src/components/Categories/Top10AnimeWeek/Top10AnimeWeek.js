import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Img from "../../LazyLoading/Img/Img";

const Top10AnimeWeek = ({ top10AnimesWeek }) => {
  return (
    <div className="top10-animes-background">
      <div className="top10-animes-container">
        <h1>Top 10 Animes (Week)</h1>
        <div className="top10-anime-card-container">
          {top10AnimesWeek.map((anime) => (
            <Link key={anime.id} to={`/data/${anime.id}`} className="top10-anime-card">
              <Img className="top10-image" src={anime.poster} alt={anime.name} />
              <p>{anime.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Top10AnimeWeek;
