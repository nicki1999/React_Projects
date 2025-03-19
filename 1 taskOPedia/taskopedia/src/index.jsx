import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./Layout/Header";
import Counter from "./Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header></Header> <Counter></Counter>
  </div>
);
