import Button from '../Button';

import {
  ContactStyledList,
  ContactItem,
  ContactName,
} from './ContactList.styled';

import { TContact } from '../App.types';

type Props = {
  contacts: TContact[];
  onDeleteItem: (arg: string | undefined) => void;
};

const ContactList = ({ contacts, onDeleteItem }: Props) => (
  <ContactStyledList>
    {contacts.map(({ name, id, number }) => (
      <ContactItem key={id} id={id}>
        <ContactName>
          {name} : {number}
        </ContactName>
        <Button onClick={() => id && onDeleteItem(id)} type="button">
          Delete
        </Button>
      </ContactItem>
    ))}
  </ContactStyledList>
);

export default ContactList;
