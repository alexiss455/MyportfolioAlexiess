import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./pages/Header";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Header />
  </React.StrictMode>
);
