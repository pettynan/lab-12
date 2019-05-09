import React from 'react';
import Header from './header.js';
import Search_Form from './search-form.js';
import Map from './map.js';
import Search_Results from './search-results.js';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    );
  };
};

class Main extends React.Component{
  render() {
    return (
      <React.Fragment>
        <Search_Form />
        <Map />
        <Search_Results />
      </React.Fragment>
    );
  };
};

export default App;
