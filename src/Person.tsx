import React, { useState } from 'react'
import propTypes from 'prop-types';

// Example of using typescript to set prop type
interface Props {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: string[]; 
  // country? can be used to make it optional in App.tsx
  country: string;
}

// enum allows few data
export enum Country {
  Brazil = "Brazil",
  France = "France",
  Canada = "Canada"
}

// apply interface to Person
export const Person = (props: Props) => {

  // example to define state with types
  const [name, setName] = useState<string>("");

  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Email: {props.email}</h1>
      <h1>Age: {props.age}</h1>
      <h1>This person {props.isMarried ? "is" : "is not"} MARRIED</h1>
      {props.friends.map((friend: string) => (
        <h1>{friend}</h1>
      ))}

      <h1>Country: {props.country}</h1>
    </div>
  );
};

// not longer to use propTypes to set type of data for each object element
// Person.propTypes = {
//   name: propTypes.string,
//   email: propTypes.string,
//   age: propTypes.number,
//   isMarried: propTypes.bool,
//   friends: propTypes.arrayOf(propTypes.string)

// }