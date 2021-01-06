import React from 'react';
import './Person.css';

function Persons(props) {
  return (
    <div className='Person'>
      <p onClick={props.clickIT}>
        My name is {props.name} and I am {props.age} Y/O
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changeName} value={props.name} />
    </div>
  );
}

export default Persons;
