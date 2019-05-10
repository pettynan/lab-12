import React from 'react';
import superagent from 'superagent';

class Eventbrite extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      eventsArray: [],
    }
  }

  getEvents = () => {
    superagent.get('https://blooming-hollows-11631.herokuapp.com/events')
    .query({data: this.props.location})
    .then(result => {
      this.setState({eventsArray: result.body});
    })
    .catch((error)=> {
      console.log('THERE\'S BEEN AN ERROR WITH SUPERAGENT', error);
    });
  }

  componentDidMount() {
    this.getEvents();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.getEvents();
    }
  }

  render() {
    let JSXArray = this.state.eventsArray.map((x, i) => 
    <li key={i}>
    <a href={x.link}>{x.name}</a>
    <p>Event Date: {x.event_date}</p>
    <p>{x.summary}</p>
    </li>
    );
    return (
    <> 
      <h3>Results from the Eventbrite API</h3>
      <ul>{JSXArray}</ul>
    </>
    )
  };
}

export default Eventbrite