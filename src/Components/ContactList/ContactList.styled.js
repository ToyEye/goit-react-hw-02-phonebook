import React from "react";
import styled from '@emotion/styled';

const ContactStyledList = styled.ul`
    width: 250px;
    padding: 15px;
`
const ContactItem = styled.li`
    color: black;
`

const ContactName = styled.p`
    color:black;
`

const ContactList = ({ contacts }) => (
    <ContactStyledList>
        {contacts.map(contact => <ContactItem key={contact.id} id={contact.id}>
            <ContactName>
                {contact.name} : {contact.number}
            </ContactName>
        </ContactItem>)}
    </ContactStyledList>
)


export default ContactList;