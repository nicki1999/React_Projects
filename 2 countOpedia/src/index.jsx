import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import MainBody from "./MainBody";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Header />
    <MainBody />
    <Footer />
  </div>
);
