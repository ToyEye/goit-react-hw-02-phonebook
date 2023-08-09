import { ChangeEvent } from 'react';

import { ImputEnter, InputType, InputText } from '../FormComponents';

type Prop = {
  value: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
};
const Filter = ({ value, onChange }: Prop) => {
  return (
    <InputType>
      <InputText>Find contact by name</InputText>
      <ImputEnter onChange={onChange} value={value} />
    </InputType>
  );
};

export default Filter;
