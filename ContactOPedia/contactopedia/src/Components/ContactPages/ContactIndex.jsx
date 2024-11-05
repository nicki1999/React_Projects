import AddRandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveAllContact";
import AddContact from "./AddContact";
import FavouriteContact from "./FavouriteContact";
import GeneralContact from "./GeneralContact";
import React from "react";

class ContactIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 1,
          name: "Ben Parker",
          phone: "666-666-7770",
          email: "ben@dotnetmastery.com",
          isFavorite: false,
        },
        {
          id: 2,
          name: "Kathy Patrick",
          phone: "111-222-0000",
          email: "Kathy@dotnetmastery.com",
          isFavorite: true,
        },
        {
          id: 3,
          name: "Paul Show",
          phone: "999-222-1111",
          email: "Paul@dotnetmastery.com",
          isFavorite: true,
        },
      ],
      isUpdating: false,
      updateContact: {},
    };
  }

  handleAddContact = (newContact) => {
    if (newContact.name == "" || newContact.phone == "") {
      return { status: "failure", msg: "Don't leave this empty" };
    }
    const duplicateRecord = this.state.contactList.filter((x) => {
      if (x.name == newContact.name && x.phone == newContact.phone) {
        return true;
      }
    });

    if (duplicateRecord.length > 0) {
      return { status: "failure", msg: "There is a duplicate value" };
    } else {
      const newFinalContact = {
        ...newContact,
        id: this.state.contactList[this.state.contactList.length - 1].id + 1,
        isFavorite: false,
      };
      this.setState((previousState) => {
        return {
          contactList: previousState.contactList.concat([newFinalContact]),
        };
      });
      return {
        status: "success",
        msg: "Contact was added successfully",
      };
      //alert("hello");
    }
  };

  handleToggleFavorites = (contact) => {
    this.setState((previousState) => {
      return {
        contactList: previousState.contactList.map((obj) => {
          if (obj.id == contact.id) {
            return { ...obj, isFavorite: !obj.isFavorite };
          }
          return obj;
        }),
      };
    });
  };

  handleDeleteContact = (contact) => {
    this.setState((previousState) => {
      return {
        contactList: previousState.contactList.filter(
          (obj) => obj.id !== contact.id
        ),
      };
    });
  };

  handleAddRandomContact = (newContact) => {
    const newFinalContact = {
      ...newContact,
      id: this.state.contactList[this.state.contactList.length - 1].id + 1,
      isFavorite: false,
    };
    this.setState((previousState) => {
      return {
        contactList: previousState.contactList.concat([newFinalContact]),
      };
    });
  };

  handleRemoveAllContacts = () => {
    this.setState(() => {
      return {
        contactList: [],
      };
    });
  };
  // {this.state.contactList.filter(
  //   (u) => u.isFavorite == false
  // )}
  handleUpdateClick = (contact) => {
    this.setState(() => {
      return {
        updateContact: contact,
        isUpdating: true,
      };
    });
  };

  handleUpdateContact = (updateContact) => {
    this.setState((previousState) => {
      return {
        contactList: previousState.contactList.map((obj) => {
          if (obj.id == updateContact.id) {
            return {
              ...obj,
              name: updateContact.name,
              email: updateContact.email,
              phone: updateContact.phone,
            };
          }
          return obj;
        }),
        isUpdating: false,
        updateContact: {},
      };
    });
  };

  handleCancelContact = (contact) => {
    this.setState(() => {
      return {
        updateContact: [],
        isUpdating: false,
      };
    });
  };
  render() {
    return (
      <div className="Container col-12 " style={{ minWidth: "85vh" }}>
        <div className="row py-3">
          <div className="col-5 offset-1">
            <AddRandomContact
              addRandomContact={this.handleAddRandomContact}
            ></AddRandomContact>
          </div>
          <div className="col-5">
            <RemoveAllContact
              removeAllContacts={this.handleRemoveAllContacts}
            ></RemoveAllContact>
          </div>
          <div className="row col-10 offset-1 py-2">
            <AddContact
              handleContact={this.handleAddContact}
              newContact={this.state.updateContact}
              updateStatus={this.state.isUpdating}
              cancelContact={this.handleCancelContact}
            ></AddContact>
          </div>
          <div className="row col-10 offset-1 py-2">
            <FavouriteContact
              contacts={this.state.contactList.filter(
                (u) => u.isFavorite == true
              )}
              toggleFavorite={this.handleToggleFavorites}
              deleteContact={this.handleDeleteContact}
              updateContact={this.handleUpdateClick}
            ></FavouriteContact>
          </div>
          <div className="row col-10  offset-1 py-2">
            <GeneralContact
              contacts={this.state.contactList.filter(
                (u) => u.isFavorite == false
              )}
              toggleFavorite={this.handleToggleFavorites}
              deleteContact={this.handleDeleteContact}
              updateContact={this.handleUpdateClick}
            ></GeneralContact>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactIndex;
