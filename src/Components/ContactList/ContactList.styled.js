import React from "react";
import styled from '@emotion/styled';
import Button from "../Button";

const ContactStyledList = styled.ul`
    width: 450px;
    padding: 15px;
    margin-left:auto;
    margin-right:auto;
    margin-top:10px;
    border: 1px solid black;
    border-radius: 5px;
`
const ContactItem = styled.li`
    color: black;
    &:not(:last-child){
         margin-bottom: 25px
    };
`

const ContactName = styled.p`
    color:black;
    margin-bottom: 15px;
`

const ContactList = ({ contacts, onDeleteItem }) => (
    <ContactStyledList>
        {contacts.map(({ name, id, number }) =>
            <ContactItem key={id} id={id}>
                <ContactName>
                    {name} : {number}
                </ContactName>
                <Button
                    type="button"
                    onClick={() => onDeleteItem(id)}>
                    Delete
                </Button>
            </ContactItem>)}
    </ContactStyledList>
);


export default ContactList;