import React from 'react';

class Map extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      mapURL: 'http://placehold.it/600x300',
      mapIsHidden: 'true'
    };
  }

  componentDidUpdate() {
    let newMapURL = `https://maps.googleapis.com/maps/api/staticmap?center=${this.props.location.latitude}%2c%20${this.props.location.longitude}&zoom=13&size=600x300&maptype=roadmap&key=${process.env.REACT_APP_GEOCODE_API_KEY}`

    if (this.state.mapURL !== newMapURL) {
      this.setState({mapURL: newMapURL});
      this.setState({mapIsHidden: false})
    }
  }

  render() {
    return (
      <div className={this.state.mapIsHidden? 'hide' : ''}>
        <img id="map" src={this.state.mapURL} alt="Map of search query" />
        <h2 class="query-placeholder">Here are the results for {this.props.location.formatted_query}</h2>
      </div>
    )
  }
}

export default Map;