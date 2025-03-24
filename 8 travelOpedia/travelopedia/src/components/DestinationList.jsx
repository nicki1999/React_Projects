import React from "react";
import { useGetAllDestinationsQuery } from "../api/DestinationAPI";
import Destination from "./Destination";

function DestinationList() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllDestinationsQuery();

  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    content = data.map((destination) => {
      return (
        <Destination
          key={destination.id}
          destination={destination}
        ></Destination>
      );
    });
  } else if (isError) {
    content = <div>Error: {error}</div>;
  }
  return <div className="pt-3">{content}</div>;
}

export default DestinationList;
