import React from "react";
import { useDeleteDestinationMutation } from "../api/DestinationAPI";
import { useUpdateDestinationMutation } from "../api/DestinationAPI";
import { useState } from "react";

function Destination({ destination }) {
  const [isEditting, setIsEditting] = useState(false);
  const [city, setCity] = useState(destination.city);
  const [country, setCountry] = useState(destination.country);

  const [deleteDestinationMutation] = useDeleteDestinationMutation();
  const [updateDestinationMutation] = useUpdateDestinationMutation();

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };
  const handleEdit = () => {
    setIsEditting(!isEditting);
    if (isEditting == true) {
      console.log("Im editing");
    }
  };
  const handleUpdate = () => {
    updateDestinationMutation({
      id: destination.id,
      city: city,
      country: country,
      daysNeeded: destination.daysNeeded,
    });
    setIsEditting(false);
  };
  return (
    <article style={{ fontSize: "20px" }}>
      <div className="text-center  p-2">
        <div className="row">
          <div className="col">
            {isEditting ? (
              <span>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder={destination.city}
                  onChange={(e) => handleCityChange(e)}
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder={destination.country}
                  onChange={(e) => handleCountryChange(e)}
                />
              </span>
            ) : (
              <span className="text-warning">
                {destination.city}, {destination.country}
              </span>
            )}
          </div>
          <div className="col">
            <p className="text-secondary"> {destination.daysNeeded} days</p>
          </div>
          <div className="col">
            <button
              className="btn btn-lg btn-danger"
              onClick={() => deleteDestinationMutation({ id: destination.id })}
            >
              Delete
            </button>
            &nbsp;
            {isEditting ? (
              <span>
                <button
                  className="btn btn-lg btn-warning"
                  onClick={() => handleEdit()}
                >
                  Cancel
                </button>{" "}
                &nbsp;
                <button
                  className="btn btn-lg btn-info"
                  onClick={() => {
                    handleUpdate();
                  }}
                >
                  Update
                </button>
              </span>
            ) : (
              <button
                className="btn btn-lg btn-warning"
                onClick={() => handleEdit()}
              >
                Edit
              </button>
            )}
          </div>
        </div>
        <hr />
      </div>
    </article>
  );
}

export default Destination;
