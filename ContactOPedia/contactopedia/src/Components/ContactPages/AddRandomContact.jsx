import { getRandomUser } from "../../Utility/api";
export default function AddRandomContact(props) {
  const GetRandomContact = async () => {
    const responseFromAPI = await getRandomUser();
    return props.handleAddRandomContact({
      name: responseFromAPI.data.first_name + responseFromAPI.data.last_name,
      email: responseFromAPI.data.email,
      phone: responseFromAPI.data.phone,
    });
  };

  return (
    <div>
      <button
        className="btn btn-success w-100"
        onClick={() => GetRandomContact()}
      >
        Add Random Contact
      </button>
    </div>
  );
}
