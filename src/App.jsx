import { Component } from 'react';
import SectionComponent from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import Message from './components/Message/Message';
import contacts from './data/contacts.json';
import { nanoid } from 'nanoid';


class App extends Component {

  state = {
    contacts:
      contacts,
    filter: '   ',
  }

  addContact = ({ name, number }) => {
    // console.log("App: ", { name, number });
    const { contacts } = this.state;
    // console.log(contacts)
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ?
      alert(`${name} is already in contacts`)
      :
      this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts],
      }))

  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== contactId),
    }));
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filteredContactList = () => {
    const { filter, contacts } = this.state;
    const normilizedValue = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedValue))
  }

  render() {
    console.log(this.state.contacts.length);
    const { length } = this.state.contacts;
    const { filter } = this.state;
    return (
      <SectionComponent>

        <h1>Phonebook</h1>
        <ContactForm onSubmitProp={this.addContact} />

        <h2>Contact List</h2>
        <Filter
          value={filter}
          changeFilter={this.changeFilter} />
        {
          length > 0 ? (
            <ContactList
              contacts={this.filteredContactList()}
              onDeleteContact={this.deleteContact}
            />
          ) : (<Message message="Contact list is empty." />)
        }

      </SectionComponent >
    );
  }

};


export default App;