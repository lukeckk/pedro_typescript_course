import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Person, Country } from './Person';

// Typescript example
function App() {

  // typescript function example to receive string parameter and number return type
  const getAge = (name: string): number => {
    return 99;
  }

  return (
    <div className="App">
      <Person
        name="Luke"
        email="luke@gmail.com"
        age={27}
        isMarried={true}
        friends={["jessica", "jake", "jerry", "jasmine"]}
        country={Country.Brazil}
        />
    </div>
  );
}

export default App;
