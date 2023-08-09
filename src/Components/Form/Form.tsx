import React, { Component, FormEvent, ChangeEvent } from 'react';

import Button from '../Button';
import {
  ImputEnter,
  InputType,
  InputText,
  FormStyled,
} from '../FormComponents/FormComponents.styled';

type TContact = {
  name: string;
  number: string;
};

type Props = {
  onSubmit: (arg: TContact) => void;
};

class Form extends Component<Props> {
  state = {
    name: '',
    number: '',
  };

  handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <FormStyled onSubmit={this.handleSubmit}>
        <InputType>
          <InputText>Name</InputText>
          <ImputEnter
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter your name"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </InputType>
        <InputType>
          <InputText>Name</InputText>
          <ImputEnter
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter your number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </InputType>
        <Button type="submit">Add contact</Button>
      </FormStyled>
    );
  }
}

export default Form;
