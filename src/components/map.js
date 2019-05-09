import React from 'react';

class Map extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      mapURL: 'http://placehold.it/600x300'
    };
  }

  componentDidUpdate() {
    console.log(process.env);
    let newMapURL = `https://maps.googleapis.com/maps/api/staticmap?center=${this.props.location.latitude}%2c%20${this.props.location.longitude}&zoom=13&size=600x300&maptype=roadmap&key=${process.env.REACT_APP_GEOCODE_API_KEY}`

    if (this.state.mapURL !== newMapURL) {

      this.setState({mapURL: newMapURL});
    }
  }



  render() {
    return (
      <div>
        <img id="map" className="hide" src={this.state.mapURL} alt="Map of search query" />
        <h2 className="query-placeholder">Here are the results for Lorem, IP, SUM</h2>
      </div>
    )
  }
}

export default Map;