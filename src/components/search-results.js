import React from 'react';
import DarkSky from './results/darksky.js';
import Yelp from './results/yelp.js';
import Eventbrite from './results/eventbrite.js';
import MovieDB from './results/moviedb.js';

class SearchResults extends React.Component{



  render() {
    return (
      <div>
        <DarkSky location={this.props.location}/>
        <Yelp />
        <Eventbrite />
        <MovieDB />
      </div>
    )
  }
}

export default SearchResults;