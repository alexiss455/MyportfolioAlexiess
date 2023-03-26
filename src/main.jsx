import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "../src/pages/Header";
import LeftsideContent from "./components/Leftsidecontent";
import RightsideContent from "./components/Rightsidecontent";
import Home from "./pages/home";
import Aboutme from "./pages/aboutme";
import Contribution from "./pages/Contribution";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Footer from "./pages/footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <main>
      <LeftsideContent />
      <RightsideContent />
      <div className="max-w-screen-2xl mx-auto">
        <div className=" w-8/12 mx-auto max-sm:px-6 max-sm:w-full">
          <div className="min-h-screen flex items-center">
            <Home />
          </div>
          <Aboutme />
          <Contribution />
          <Projects />
          <Contact />
        </div>
      </div>
    </main>
    <Footer />
  </React.StrictMode>
);
