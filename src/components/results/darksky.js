import React from 'react';
import superagent from 'superagent';

class DarkSky extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      weatherArray: [],
    }
  }

  getWeather = () => {
    superagent.get('https://blooming-hollows-11631.herokuapp.com/weather')
    .query({data: this.props.location})
    .then(result => {
      this.setState({weatherArray: result.body});
    })
    .catch((error)=> {
      console.log('THERE\'S BEEN AN ERROR WITH SUPERAGENT', error);
    });
  }


  componentDidMount() {
    this.getWeather();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) { 
      this.getWeather();
    }
  }

  render() {
      let JSXArray = this.state.weatherArray.map((x, i) => 
      <li key={i}>The forecast for { x.time } is: { x.forecast }</li>);
      return (
      <section className="column-container">
        <h3>Results from the Dark Sky API</h3>
        <ul>{JSXArray}</ul>
      </section>
      );
  }
}

export default DarkSky;