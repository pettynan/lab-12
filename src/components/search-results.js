import React from 'react';
// import superagent from 'superagent';

import DarkSky from './results/darksky.js';
import Yelp from './results/yelp.js';
import Eventbrite from './results/eventbrite.js';
import MovieDB from './results/moviedb.js';

class SearchResults extends React.Component{

  render() {
    if (Object.keys(this.props.location).length > 0) {
      return (
        <div className="column-container">
          <DarkSky location={this.props.location}/>
          <Yelp location={this.props.location}/>
          <Eventbrite location={this.props.location}/>
          <MovieDB location={this.props.location}/>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default SearchResults;