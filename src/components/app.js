import React from 'react';
import Header from './header.js';
import SearchForm from './search-form.js';
import Map from './map.js';
import SearchResults from './search-results.js';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      location: {}
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
        <SearchForm />
        <Map />
        <SearchResults />
      </React.Fragment>
    );
  };
};

export default App;
