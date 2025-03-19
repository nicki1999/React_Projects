import React from "react";

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: undefined,
      successMessage: undefined,
    };
  }
  handleContactFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.contactName.value.trim();
    const email = e.target.elements.contactEmail.value.trim();
    const phone = e.target.elements.contactPhone.value.trim();

    const response = this.props.handleContact({
      name: name,
      email: email,
      phone: phone,
    });
    if (response.status == "failure") {
      this.setState({
        errorMessage: response.msg,
        successMessage: undefined,
      });
    } else if (response.status == "success") {
      this.setState({
        errorMessage: undefined,
        successMessage: response.msg,
      });
    }
  };
  render() {
    return (
      <div className="container row">
        <form
          action=""
          className="col-10 contact-form"
          onSubmit={this.handleContactFormSubmit}
        >
          <div
            className="row container py-2 center"
            style={{ border: "1px solid white" }}
          >
            <p style={{ color: "grey" }}>Add a new contact</p>
            <div className="col-4">
              <input
                type="text"
                className="w-100 rounded p-2"
                placeholder="Name..."
                name="contactName"
                defaultValue={this.props.newContact.name}
              />
            </div>
            <div className="col-4">
              <input
                type="text"
                className="w-100 rounded p-2"
                placeholder="Email..."
                name="contactEmail"
                defaultValue={this.props.newContact.email}
              />
            </div>
            <div className="col-4">
              <input
                type="text"
                className="w-100 rounded p-2"
                placeholder="Phone..."
                name="contactPhone"
                defaultValue={this.props.newContact.phone}
              />
            </div>
            {this.state.errorMessage == undefined ? (
              <div></div>
            ) : (
              <div className="col-12 text-center text-danger">
                {this.state.errorMessage}
              </div>
            )}
            <div
              className={`${
                this.props.updateStatus ? "col-4 offset-4" : "col-8 offset-2"
              }  py-3 center`}
            >
              {this.props.updateStatus ? (
                <button
                  className=" btn btn-primary w-100 rounded mx-2 my-2"
                  onClick={this.props.updateContact2}
                >
                  Update
                </button>
              ) : (
                <button className=" btn btn-primary w-100 rounded mx-2 my-2">
                  Create
                </button>
              )}

              {this.props.updateStatus ? (
                <button
                  className=" btn btn-secondary w-100 rounded mx-2 my-2"
                  onClick={this.props.cancelContact}
                >
                  Cancel
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;
