import React from "react";
import logo from "../assets/sono_io.png";

const About = () => {
  return (
    <div className="content py-5 bg-secondary bg-opacity-25">
      <div className="container">
        <div className="p-5 bg-dark text-light rounded-4 shadow-lg">

          {/* Titolo */}
          <h2 className="text-info fw-bold mb-4 text-center">Chi Sono</h2>

          {/* Immagine */}
          <div className="d-flex justify-content-center mt-3 mb-5">
            <img src={logo} alt="Sono Io" />
          </div>

          <p className="lead text-center">
            Ciao! Sono <strong>Alessandro Agnello</strong>, programmatore appassionato di videogiochi e sviluppo software.
          </p>

          <hr className="border-warning my-4" />

          {/* Game Development */}
          <h3 className="text-warning fw-semibold mb-3">Percorso nel Game Development</h3>
          <p>
            Ho iniziato come <span className="badge bg-info text-dark rounded-pill px-2 py-1">Game Developer</span> usando 
            <span className="badge bg-primary rounded-pill px-2 py-1 ms-1">Unity</span> e il linguaggio 
            <span className="badge bg-success rounded-pill px-2 py-1 ms-1">C#</span> per creare i miei primi progetti.
          </p>
          <p>
            Ho approfondito le mie competenze con <span className="badge bg-danger rounded-pill px-2 py-1">Unreal Engine 4.26</span> durante il percorso alla scuola di Vigamus e partecipando a diversi eventi e game jam.
          </p>

          {/* Esperienze Salienti */}
          <h3 className="text-warning fw-semibold mt-4 mb-3">Esperienze Salienti</h3>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item bg-dark text-light mb-2 border-info rounded shadow-sm">
              <strong>PROJECTINFINITO3</strong> - 
              <a href="https://www.vigamusacademy.com/infinito-3-dante-naraku/" target="_blank" rel="noreferrer" className="text-info text-decoration-none"> Vigamus.com</a>,
              <a href="https://vantan-game.com/special/tgs/tgs2021/sub_page_06.html" target="_blank" rel="noreferrer" className="text-info text-decoration-none"> Vantan.com</a>
              <p className="mb-0 small">Team di studenti guidati da Suda51 per programmare un gioco ispirato a Dante Alighieri.</p>
            </li>
            <li className="list-group-item bg-dark text-light mb-2 border-info rounded shadow-sm">
              <strong>Gamejam 2021</strong> - 
              <a href="https://1nvadersmustdie.itch.io/insert-title-here" target="_blank" rel="noreferrer" className="text-info text-decoration-none"> 1nvadersmustdie.itch.io</a>
              <p className="mb-0 small">Esperienza immersiva di 2 giorni dedicata al game design e alla programmazione del gioco.</p>
            </li>
          </ul>

          {/* Full Stack Development */}
          <h3 className="text-warning fw-semibold mt-4 mb-3">Percorso nel Full Stack Development</h3>
          <p>
            Ho ampliato le mie conoscenze nel <span className="badge bg-primary rounded-pill px-2 py-1">Full Stack Development</span>, studiando diversi framework e linguaggi per creare siti web responsive e accessibili.
          </p>

          <hr className="border-warning my-4" />

          {/* Competenze Web */}
          <h3 className="text-warning fw-semibold mb-3">Competenze Web</h3>
          <div className="d-flex flex-wrap gap-2 mb-3">
            <span className="badge bg-info text-dark rounded-pill px-3 py-2">HTML</span>
            <span className="badge bg-info text-dark rounded-pill px-3 py-2">CSS</span>
            <span className="badge bg-info text-dark rounded-pill px-3 py-2">Tailwind</span>
            <span className="badge bg-info text-dark rounded-pill px-3 py-2">Bootstrap</span>
          </div>

          {/* Linguaggi Studiati */}
          <h3 className="text-warning fw-semibold mb-3">Linguaggi Studiati</h3>
          <div className="d-flex flex-wrap gap-2 mb-3">
            <span className="badge bg-success rounded-pill px-3 py-2">PHP</span>
            <span className="badge bg-success rounded-pill px-3 py-2">JavaScript</span>
            <span className="badge bg-success rounded-pill px-3 py-2">Java</span>
          </div>

          {/* Framework Studiati */}
          <h3 className="text-warning fw-semibold mb-3">Framework Studiati</h3>
          <div className="d-flex flex-wrap gap-2 mb-3">
            <span className="badge bg-danger rounded-pill px-3 py-2">Laravel</span>
            <span className="badge bg-danger rounded-pill px-3 py-2">React</span>
            <span className="badge bg-danger rounded-pill px-3 py-2">Spring</span>
          </div>

          <p className="mt-4">
            Ho ancora molto da imparare, ma do sempre il massimo per raggiungere ogni obiettivo!
          </p>
          <strong className="fw-bold text-center fs-5 d-block">Keep calm, and let's code!</strong>
        </div>
      </div>
    </div>
  );
};

export default About;
