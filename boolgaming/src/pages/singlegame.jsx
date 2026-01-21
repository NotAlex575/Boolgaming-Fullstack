import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Singlegame = () => {
  const { id } = useParams();
  const [videogame, setVideogame] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/videogame/${id}`)
      .then((res) => setVideogame(res.data.result))
      .catch((err) => console.error(err));
  }, [id]);

  if (!videogame) return <p>Loading...</p>;

  /* ====== TRAILER YOUTUBE ====== */
  let embedUrl = null;

  if (videogame.trailer) {
    const cleanUrl = videogame.trailer.split("&")[0];

    if (cleanUrl.includes("watch?v=")) {
      embedUrl = cleanUrl.replace("watch?v=", "embed/");
    } else if (cleanUrl.includes("youtu.be/")) {
      embedUrl = cleanUrl.replace(
        "youtu.be/",
        "www.youtube.com/embed/"
      );
    }
  }

 return (
    <div className="container my-5">

      <div className="card bg-dark text-light border border-success shadow-lg">
        <div className="card-body p-4">

          {/* Titolo */}
          <h1 className="text-info fw-bold mb-1">
            {videogame.nome}
          </h1>

          {/* Franchise */}
          {videogame.franchise && /*se esiste un franchise dentro*/(
            <h5 className="text-warning mb-3">
              {videogame.franchise.franchise_name}
            </h5>
          )}

          <hr className="border-success" />

          {/* Layout principale */}
          <div className="row g-4">

            {/* Immagine */}
            <div className="col-12 col-lg-5">
              <img
                //CERCA L'IMMAGINE
                src={`http://127.0.0.1:8000/storage/${videogame.immagine}`}
                //SE NON ESISTE UN'IMMAGINE
                onError={(e) => (e.target.src = "/No_Image_Available.jpg")}
                className="img-fluid rounded shadow border border-success"
                style={{ height: "100%", objectFit: "cover" }}
                alt={videogame.nome}
              />
            </div>

            {/* Info */}
            <div className="col-12 col-lg-7">
              {/* Prezzo */}
              <p className="fs-5">
                <strong>Prezzo:</strong>{" "}
                <span className="badge bg-success fs-6">
                  {videogame.prezzo} €
                </span>
              </p>

              {/* Data di rilascio */}
              <p>
                <strong>Data di rilascio:</strong> {videogame.release_date}
              </p>

              {/* Pegi */}
              <h6 className="text-info mt-3">
                Pegi: {videogame.pegi}
              </h6>

              {/* Console */}
              {Array.isArray(videogame.consoles) && videogame.consoles.length > 0 && (
                <div className="mt-2">
                  <strong>Console:</strong>{" "}
                  {videogame.consoles.map((console) => (
                    <span
                      key={console.id}
                      className="badge text-dark me-1"
                      style={{ backgroundColor: console.color }}
                    >
                      {console.nome}
                    </span>
                  ))}
                </div>
              )}

              {/* Generi */}
              {Array.isArray(videogame.genres) && videogame.genres.length > 0 && (
                <div className="mt-2">
                  <strong>Generi:</strong>{" "}
                  {videogame.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="badge text-dark me-1"
                      style={{ backgroundColor: genre.color }}
                    >
                      {genre.nome}
                    </span>
                  ))}
                </div>
              )}

            </div>
          </div>

          <hr className="border-success my-4" />

          {/* Trailer */}
          {videogame.trailer && embedUrl && (
            <div className="text-center">
              <h5 className="text-warning mb-3">Trailer</h5>
              <div className="ratio ratio-16x9">
                <iframe
                  src={embedUrl}
                  title={`Trailer di ${videogame.nome}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          <hr className="border-success my-4" />

          {/* Descrizione */}
          <p className="fs-5">
            {videogame.descrizione}
          </p>

        </div>
      </div>

      {/* Torna alla homepage */}
      <Link to="/" className="btn btn-outline-info mt-4 px-4">
        Torna indietro
      </Link>

    </div>
  );

};

export default Singlegame;
