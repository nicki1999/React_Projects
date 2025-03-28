import Contact from "./Contact";

export default function FavouriteContact(props) {
  return (
    <div
      className="row container py-2"
      style={{ backgroundColor: "gray", borderRadius: "5px" }}
    >
      <div className="col-12">
        <h4 className="text-center" style={{ color: "white" }}>
          Favorites
        </h4>
        {props.contacts.map((contact, index) => (
          <Contact
            contact={contact}
            key={index}
            toggleFavorite={props.toggleFavorite}
            deleteContact={props.deleteContact}
            updateContact={props.updateContact}
          />
        ))}
      </div>
    </div>
  );
}
