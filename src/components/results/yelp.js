import React from 'react';
import superagent from 'superagent';

class Yelp extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      yelpArray: [],
    }
  }

  getYelp = () => {
    superagent.get('https://blooming-hollows-11631.herokuapp.com/yelp')
    .query({data: this.props.location})
    .then(result => {
      this.setState({yelpArray: result.body});
    })
    .catch((error)=> {
      console.log('THERE\'S BEEN AN ERROR WITH SUPERAGENT', error);
    });
  }

  componentDidMount() {
    this.getYelp();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.getYelp();
    }
  }

  render() {
    let JSXArray = this.state.yelpArray.map((x, i) => 
    <li key={i}>
    <a href={x.url}>{x.name}</a>
    <p>The average rating is {x.rating} out of 5 and the average cost is {x.price} out of 4</p>
    <img src={x.image_url} alt={x.name}/></li>);
    return (
    <section className="column-container"> 
      <h3>Results from the Yelp API</h3>
      <ul>{JSXArray}</ul>
    </section>
    )
  };
}

export default Yelp;