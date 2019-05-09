import React from 'react';
import Header from './header.js';
import SearchForm from './search-form.js';
import Map from './map.js';
import SearchResults from './search-results.js';

class App extends React.Component{
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     location: {}
  //   };
  // }


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
  constructor(props) {
    super(props);

    this.state = {
      location: {}
    };
  }

  updateLocation = (newLocation) => {
    if (this.state.location !== newLocation) {
      this.setState({location: newLocation});
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  // }

  render() {
    return (
      <React.Fragment>
        <SearchForm updateLocation={this.updateLocation}/>
        <Map location={this.state.location}/>
        <SearchResults location={this.state.location}/>
      </React.Fragment>
    );
  };
};

export default App;
