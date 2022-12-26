import React, { Component } from 'react';
import Section from './feedback';

class App extends Component {

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101'
        }}
      >
        <Section title="Please live feedback"/>

      </div>
    );
  }
};

export default App;
