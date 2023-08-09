import { Component, ChangeEvent } from 'react';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';

import { Container } from './Components/Container';
import Form from './Components/Form';
import { Section, Title } from './Components/Section';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';

import { TContact } from './Components/App.types';

type TAppState = {
  contacts: TContact[];
  filter: string;
};

class App extends Component<{}, TAppState> {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }: TContact) => {
    const { contacts } = this.state;

    const isExist = contacts.filter(contact => contact.name === name);

    if (isExist) {
      toast.error('Контакт существует!');
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    toast.success('Контакт добавлен');
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  deleteItem = (itemId: string | undefined) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== itemId),
    }));
  };

  filterEnter = (evt: ChangeEvent<HTMLInputElement>) => {
    this.setState({ filter: evt.target.value });
  };

  filterChange = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const { filter } = this.state;
    return (
      <Container>
        <Toaster
          toastOptions={{
            error: {
              duration: 2000,
            },
          }}
        />
        <Section>
          <Title>Phonebook</Title>
          <Form onSubmit={this.addContact} />
        </Section>
        <Section>
          <Title>Contacts</Title>
          <Filter value={filter} onChange={this.filterEnter} />
          <ContactList
            contacts={this.filterChange()}
            onDeleteItem={this.deleteItem}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
