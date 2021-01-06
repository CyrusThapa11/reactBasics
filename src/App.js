import './App.css';
import React, { Component } from 'react';
import Persons from './Persons/Persons';
import './Persons/Person.css';

// import React, { useState } from 'react';

/*
function App() {
  //PseudoState has the initial state and  setPseudoState is the state
  // changer function !

  const [PseudoState, setPseudoState] = useState({
    persons: [
      { name: 'abhishek1', age: '19' },
      { name: 'abhishek2', age: '18' },
      { name: 'abhishek3', age: '17' },
    ],
    otherState: 1021,
  });

  // also call useState !
  const [otherState, setOtherState] = useState('some other value !');

  console.log(PseudoState, otherState);

  const changeNamePseudo = () => {
    setPseudoState({
      persons: [
        { name: 'aabhay', age: '19' },
        { name: 'abhishek2', age: '18' },
        { name: 'abhishek3', age: '12' },
      ],
      //we  need to manually add other states as it replaces !!
      otherState: PseudoState.otherState,
    });
  };

  return (
    <div>
      <div className='App'>
        <h1>Hello to these people !</h1>
        <button onClick={changeNamePseudo}>Click to change !</button>
        <Persons
          name={PseudoState.persons[0].name}
          age={PseudoState.persons[0].age}
        />
        <Persons
          name={PseudoState.persons[1].name}
          age={PseudoState.persons[1].age}

          // clickIT =
        />

        <Persons
          name={PseudoState.persons[2].name}
          age={PseudoState.persons[2].age}
        />
      </div>
    </div>
  );
}
*/

export class App extends Component {
  state = {
    persons: [
      { id: 'h123', name: 'abhishek1', age: '19' },
      { id: 's23b', name: 'abhishek2', age: '18' },
      { id: 'g13c', name: 'abhishek3', age: '17' },
    ],
    otherState: 1021,
    roggleDiv: false,
  };

  /*
  changeName = (newInfo) => {
    this.setState({
      persons: [
        { name: newInfo, age: '119' },
        { name: 'abhishek22', age: '118' },
        { name: 'abhishek44', age: '112' },
      ],
    });
  };
  */

  nameChanger = (ev) => {
    this.setState({
      persons: [
        { id: 'h123a', name: 'abhisehk-001', age: '119' },
        { id: 's23b', name: ev.target.value, age: '118' },
        { id: 'g13c', name: 'abhishek44', age: '112' },
      ],
    });
  };

  showTheDiv = () => {
    this.setState({
      roggleDiv: !this.state.roggleDiv,
    }); // this gets merged into the other state !!
  };

  overwriteName = (index, event) => {
    const personIndex = this.state.persons.findIndex(
      (elem) => elem.id === index
    );

    // THIS IS A COPY APPROACH ! WO MUTATION THE STATE !!

    // personIndex.name = event.target.value;

    const newPerson = { ...this.state.persons[personIndex] };

    newPerson.name = event.target.value;

    // const pe = Object.assign({},this.state.persons[personIndex])
    // also do like this !

    const personnns = [...this.state.persons];
    personnns[personIndex] = newPerson;

    this.setState({ persons: personnns });
  };

  deleteElem = (index) => {
    // it will mutate the data from original pointer of react !
    // this.state.persons.splice(index, 1);  // this method is not good !
    // this.setState({ persons: this.state.persons });

    // const personn = this.state.persons.slice(); // it makes a copy andthen sends it back !
    // update state in an immutable fasion !
    const personn = [...this.state.persons]; // this is also useable !
    personn.splice(index, 1);
    this.setState({ persons: personn });
  };

  render() {
    let persons = <h1>Click to change !</h1>;

    if (this.state.roggleDiv) {
      persons = (
        <div>
          {this.state.persons.map((pers, idx) => {
            return (
              <Persons
                clickIT={this.deleteElem.bind(this, idx)}
                // they both do the same thing !!
                // clickIT={() => this.deleteElem(idx)} // this takes care on to
                name={pers.name}
                age={pers.age}
                key={pers.id}
                changeName={(ev) => this.overwriteName(pers.id, ev)}
              />
            );
          })}
        </div>
        /*
        <div>
          <Persons
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Persons
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            clickIT={this.changeName.bind(this, 'thisIsPassingAnArg !!')}
            changeName={this.nameChanger}
          >
            This is a child elem !!
          </Persons>

          <Persons
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>*/
      );
    }

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className='App'>
        <h1>Hello to these people !</h1>
        <button
          style={style}
          onClick={this.showTheDiv}
          // onClick={this.changeName.bind(this, 'thisIsPassingAnArg')}
        >
          Click to change !
        </button>
        {persons}
        {/* {this.state.roggleDiv ? (
          <div>
            <Persons
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Persons
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              clickIT={this.changeName.bind(this, 'thisIsPassingAnArg !!')}
              changeName={this.nameChanger}
            >
              This is a child elem !!
            </Persons>

            <Persons
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
        ) : (
          <h1>Click the button to view !</h1>
        )} */}
      </div>
    );
  }
}

export default App;
