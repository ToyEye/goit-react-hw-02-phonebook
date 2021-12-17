import React  from 'react'
import { ImputEnter,InputType,InputText } from "../Form";

const Filter = ({onChange}) => {
    return (   
        <InputType onChange={onChange}>
            <InputText>Find contact by name</InputText>
            <ImputEnter />
        </InputType>
   )
};
export default Filter;