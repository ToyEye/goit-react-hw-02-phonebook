import styled from '@emotion/styled';
import React, { Component } from 'react';
import Button from "../Button";


const FormStyled = styled.form`
display: flex;
flex-direction: column;
    margin-left:auto;
    margin-right:auto;
    width:450px;
    padding: 10px 15px;
    border: 1px solid black;
    border-radius:5px;
`

const ImputEnter = styled.input`
width: 220px;
    padding:5px 15px;
    border-radius:5px;
    border-color:#d4d4d4;
    
    &:hover,&:active {
        border-color:#7cb1ec;
    }
`
const InputType = styled.label`
    margin-bottom: 10px;
    `

const InputText = styled.p`
    margin-bottom:5px;
    `
class Form extends Component{
    state = {
        name: '',
        number:''
    }

handleChange = evt => {
  const { name, value } = evt.target
  this.setState({ [name]: value });
};
  
handleSubmit = evt => {
  evt.preventDefault();
  
  this.props.onSubmit(this.state)
  this.reset()
};
  
reset = () => {
  this.setState({ name: '', number:'' });
};
    render() {
        return (
            <FormStyled onSubmit={this.handleSubmit}>
                <InputType> <InputText>Name</InputText>
                    <ImputEnter
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        placeholder='Enter your name'
                        required
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </InputType>
                <InputType> <InputText>Name</InputText>
                    <ImputEnter
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        placeholder='Enter your number'
                        value={this.state.number}
                        onChange={this.handleChange}
                    />
                </InputType>
                <Button type='submit'>Add contact</Button>
            </FormStyled>
        );
    }
}

export { ImputEnter,InputType,InputText };
export default Form;