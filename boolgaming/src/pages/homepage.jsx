import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [videogames, setVideogames] = useState([]);

  //PER TESTARE LA HOVER TOGLI QUI SOTTO IL COMMENTO
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/api/videogame")
      .then(res => setVideogames(res.data.result))
      .catch(err => console.error(err));
  }, []);

  //PER TESTARE LA HOVER TOGLI QUI SOTTO IL COMMENTO
 
  const getYoutubeEmbedUrl = (url) => {
    if (!url) return null;
    const regExp = /v=([^&]+)/;
    const match = url.match(regExp);
    return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&mute=1` : url;
  };
 

  return (
  <div className="container my-5">
    <h2 className="text-center text-success mb-5 fw-bold">
      Lista dei videogiochi disponibili!
    </h2>

    <div className="row g-4">
      {videogames.map(videogame => (
        <div
          className="col-12 col-md-6 col-lg-4"
          key={videogame.id}

          //PER TESTARE LA HOVER TOGLI QUI SOTTO IL COMMENTO

          onMouseEnter={() => setHoveredCard(videogame.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="card bg-dark text-light h-100 border border-success shadow-lg overflow-hidden">

            <Link
              to={`/singlegame/${videogame.id}`}
              className="text-decoration-none text-light"
            >
            {/*PER TESTARE LA HOVER TOGLI QUI SOTTO IL COMMENTO */}
            
             {hoveredCard === videogame.id && getYoutubeEmbedUrl(videogame.trailer) ? (
                  <iframe
                    src={getYoutubeEmbedUrl(videogame.trailer)}
                    allow="autoplay"
                    title={videogame.nome}
                    className="w-100"
                    style={{ height: "320px", border: "none", pointerEvents: "none" }}
                  />
                ) : (
                  <img
                    src={`http://127.0.0.1:8000/storage/${videogame.immagine}`}
                    onError={(e) => (e.target.src = "/No_Image_Available.jpg")}
                    className="card-img-top"
                    style={{ height: "320px", objectFit: "cover" }}
                  />
              )}

              {/* SE SI VUOLE TESTARE L'HOVER, COMMENTARE IL TAG IMG QUI SOTTO */}
              {/*<img
                  src={`http://127.0.0.1:8000/storage/${videogame.immagine}`}
                  onError={(e) => (e.target.src = "/No_Image_Available.jpg")}
                  className="card-img-top"
                  style={{ height: "320px", objectFit: "cover" }}
              />*/}
              


              <div className="card-body text-center">
                <h5 className="card-title fw-bold text-info">
                  {videogame.nome}
                </h5>
                <p className="card-text mt-2">
                  <span className="badge bg-success fs-6">
                    {videogame.prezzo} €
                  </span>
                </p>
              </div>
            </Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );

};

export default Homepage;

