const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto border-top border-success">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">

        <div className="fw-semibold">
          © Boolgaming_Alex575
        </div>

        <div className="d-flex gap-3">
          <a
            href="https://www.facebook.com/alessandro.agnello.794/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-info btn-sm rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: "40px", height: "40px" }}
          >
            <i className="bi bi-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/notalex575_/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-info btn-sm rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: "40px", height: "40px" }}
          >
            <i className="bi bi-instagram"></i>
          </a>

          <a
            href="https://github.com/NotAlex575"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-info btn-sm rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: "40px", height: "40px" }}
          >
            <i className="bi bi-github"></i>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
