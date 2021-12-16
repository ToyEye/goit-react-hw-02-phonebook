import './App.css';
import React, {Component} from 'react';
import {Container} from "./Components/Container";
import Form from "./Components/Form";
import { Section, Title } from "./Components/Section";
// import Button from "./Components/Button";
import ContactList from "./Components/ContactList";
import { nanoid } from 'nanoid';
import Filter from "./Components/Filter";


class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
  }

     addContact = ({name, number}) => {
    const newContact = {
       id: nanoid(),
      name: name,
      number: number
    };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };



  
  render(){
    return (
      <Container>
        <Section>
          <Title>Phonebook</Title>
          <Form onSubmit={this.addContact }/>
        </Section>
        <Section>
          <Title>Contacts</Title>
          <Filter/>
          <ContactList contacts={this.state.contacts}/>
        </Section>
      </Container>
    )
  }
}



export default App;
