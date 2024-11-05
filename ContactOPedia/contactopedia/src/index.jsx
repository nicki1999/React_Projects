import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import ContactIndex from "./Components/ContactPages/ContactIndex";
import AddRandomContact from "./Components/ContactPages/AddRandomContact";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header></Header>
    <ContactIndex />
    <Footer></Footer>
  </div>
);
