import './App.css';
import React, {Component} from 'react';
import {Container} from "./Components/Container";
import Form from "./Components/Form";
import { Section, Title } from "./Components/Section";
import ContactList from "./Components/ContactList";
import { nanoid } from 'nanoid';
import Filter from "./Components/Filter";
import PropTypes from 'prop-types';



class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }


  addContact = ({ name, number }) => {
    let array = [];
    array = this.state.contacts.map(contact=>contact.name)

    if (!array.includes(name)) {
     const newContact = {
        id: nanoid(),
        name: name,
        number: number
      };

     return  this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts],
      }));
    } else {
      alert("Контакт существует!");
      return;
    }
  };


  deleteItem = itemId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== itemId),
    }));
  }

  filterEnter = (evt) => {
    this.setState({ filter: evt.target.value });
  }

  filterChange = () => {
   const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact => contact.name.toLocaleLowerCase()
      .includes(normalizeFilter));
  }

  render() {
    const { filter } = this.state;
    return (
      <Container>
        <Section>
          <Title>Phonebook</Title>
          <Form onSubmit={this.addContact }/>
        </Section>
        <Section>
          <Title>Contacts</Title>
          <Filter value={filter} onChange={this.filterEnter}/>
          <ContactList
            contacts={this.filterChange()}
            onDeleteItem={this.deleteItem} 
          />
        </Section>
      </Container>
    )
  }
}

App.propTypes = {
  state: PropTypes.objectOf(PropTypes.shape({
    contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number:PropTypes.number
    })),
    filter:PropTypes.string,
  })),
  addContact: PropTypes.func,
  deleteItem: PropTypes.func,
  filterEnter: PropTypes.func,
  filterChange:PropTypes.func
}

export default App;
