export default function Contact(props) {
  return (
    <div
      className="row rounded mb-2 pt-3 px-3"
      style={{ border: "1px solid white" }}
    >
      <div className="col-6 d-flex">
        <div className="col-2 ">
          <img
            src={`https://ui-avatars.com/api/?name=${props.contact.name}`}
            alt=""
          />
        </div>
        <div className="col-2 ">
          <h4 className="text-warning">{props.contact.name}</h4>
          <span className="" style={{ color: "gray" }}>
            {props.contact.email}
          </span>
          <p style={{ color: "gray" }} className="ml-2">
            {props.contact.phone}{" "}
          </p>
        </div>
      </div>
      <div className="col-4">
        <button
          className={`btn ${
            props.contact.isFavorite ? "btn-warning" : "btn-outline-warning"
          }`}
          onClick={() => props.toggleFavorite(props.contact)}
        >
          <i className="bi bi-star"></i>
        </button>
      </div>
      <div className="col-2">
        <button
          className="btn btn-primary"
          onClick={() => {
            props.updateContact(props.contact);
          }}
        >
          <i class="bi bi-pencil-square"></i>
        </button>
        <button
          className="btn btn-danger mx-3"
          onClick={() => {
            props.deleteContact(props.contact);
          }}
        >
          <i class="bi bi-trash-fill"></i>
        </button>
      </div>
    </div>
  );
}
