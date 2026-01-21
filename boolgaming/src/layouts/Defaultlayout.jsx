import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Defaultlayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-light">
      
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-grow-1 py-4">
        <div className="container">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <Footer />
      
    </div>
  );
};

export default Defaultlayout;
