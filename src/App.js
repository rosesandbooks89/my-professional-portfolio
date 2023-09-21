import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./App.css";


function App() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "AboutMe") return <AboutMe />;
    if (currentPage === "Portfolio") return <Portfolio />;
    if (currentPage === "Contact") return <Contact />;
    return <Resume />;
  };

  return (
    <div className="App">
      <Header />
      <Navigation setCurrentPage={setCurrentPage} currentPage={currentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;