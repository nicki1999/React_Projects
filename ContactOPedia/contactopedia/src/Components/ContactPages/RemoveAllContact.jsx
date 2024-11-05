export default function RemoveAllContact(props) {
  return (
    <div>
      <button
        className="btn btn-danger w-100"
        onClick={() => props.removeAllContacts()}
      >
        Remove All
      </button>
    </div>
  );
}
