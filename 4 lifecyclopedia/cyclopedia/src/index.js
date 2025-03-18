import ReactDOM from "react-dom/client";
import Header from "./Components/Layout/Header";
import CyclopediaClassPage from "./CycloPediaClassPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header></Header>
    <CyclopediaClassPage></CyclopediaClassPage>
  </div>
);
