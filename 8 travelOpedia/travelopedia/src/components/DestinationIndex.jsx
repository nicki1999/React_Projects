import React from "react";
import AddDestination from "./AddDestination";
import DestinationList from "./DestinationList";

function DestinationIndex() {
  return (
    <div className="text-white-50">
      <h1 className="text-success text-center">
        <AddDestination></AddDestination>
        <DestinationList></DestinationList>
      </h1>
    </div>
  );
}

export default DestinationIndex;
