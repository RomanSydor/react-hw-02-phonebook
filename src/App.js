import React, { Component } from "react";
import "./App.css";
import Section from "./components/Section";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem("contacts", JSON.stringify(nextContacts));
    }
  }

  addContact = (id, name, number) => {
    if (this.isContactExists(name)) {
      alert("Exists");
      return;
    }

    const contact = {
      id: id,
      name: name,
      number: number,
    };

    this.setState(({ contacts, name, number }) => ({
      contacts: [contact, ...contacts],
      name: name,
      number: number,
    }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  isContactExists(name) {
    return (
      this.state.contacts.filter((contact) => contact.name === name).length > 0
    );
  }

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div className="App">
        <Section title={"Phonebook"}>
          <AddContact onAddContact={this.addContact} />
        </Section>
        <Section title={"Contacts"}>
          {this.state.contacts.length !== 0 && (
            <>
              <Filter
                className="filterContainer"
                value={filter}
                onChange={this.changeFilter}
              />
              <ContactList
                contacts={filteredContacts}
                onDeleteContact={this.deleteContact}
              />
            </>
          )}
        </Section>
      </div>
    );
  }
}

export default App;
