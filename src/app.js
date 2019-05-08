import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

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
    )
  }
}

class Header extends React.Component{
  render() {
    return (
      <div>
        <h1>City Explorer</h1>
        <p>Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!</p>
      </div>
    )
  }
};

class Main extends React.Component{
  render() {
    return (
      <React.Fragment>
        <Search />
        <Map />
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
      </React.Fragment>
    )
  }
};

class Search extends React.Component{
  render() {
    return (
      <form id="search-form" class="hide">
        <label for="search">Search for a location</label>
        <input type="text" name="search" id="input-search" placeholder="Enter a location here" />
        <button type="submit">Explore!</button>
      </form>
    )
  }
};

class Map extends React.Component{
  render() {
    return (
      <div>
        <img id="map" class="hide" src="https://via.placeholder.com/600" alt="Map of search query" />
        <h2 class="query-placeholder">Here are the results for Lorem, IP, SUM</h2>
      </div>
    )
  }
}

class Result extends React.Component{
  render() {
    return (
      <section class="generic-container">
        <h3>Results from the LOREM IPSUM API</h3>
        <ul class="generic-results">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
        </ul>
      </section>
    )
  }
}

export default App;
