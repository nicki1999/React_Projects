import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./app/layout/Header";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Counter from "./app/components/Counter";
import DestinationList from "./app/components/DestinationList";
import DestinationFact from "./app/components/DestinationFact";
import ResetApp from "./app/components/ResetApp";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header></Header>
      <ResetApp> </ResetApp>
      <Counter></Counter>
      <div className="p-4 border text-center">
        <h4 className="text-success pb-4">Destination List</h4>
        <DestinationList></DestinationList>
      </div>
      <DestinationFact></DestinationFact>
    </Provider>
  </React.StrictMode>
);
