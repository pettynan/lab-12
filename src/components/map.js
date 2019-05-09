import React from 'react';

class Map extends React.Component{
  render() {
    return (
      <div>
        <img id="map" className="hide" src="https://via.placeholder.com/600" alt="Map of search query" />
        <h2 className="query-placeholder">Here are the results for Lorem, IP, SUM</h2>
      </div>
    )
  }
}

export default Map;