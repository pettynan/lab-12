import React from 'react';
import DarkSky from './result.js';
// import Yelp from './result.js';
// import Eventbrite from './result.js';
// import MovieDB from './result.js';
// import Hiking from './result.js';

class SearchResults extends React.Component{



  render() {
    return (
      <div>
        <DarkSky location={this.props.location}/>
        {/* <Yelp />
        <Eventbrite />
        <MovieDB /> */}
        {/* <Hiking /> */}
      </div>
    )
  }
}

export default SearchResults;