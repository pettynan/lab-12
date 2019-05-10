import React from 'react';
import superagent from 'superagent';

class MovieDB extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      moviesArray: [],
    }
  }

  getMovies = () => {
    superagent.get('https://blooming-hollows-11631.herokuapp.com/movies')
    .query({data: this.props.location})
    .then(result => {
      this.setState({moviesArray: result.body});
    })
    .catch((error)=> {
      console.log('THERE\'S BEEN AN ERROR WITH SUPERAGENT', error);
    });
  }

  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.getMovies();
    }
  }

  render() {
    let JSXArray = this.state.moviesArray.map((x, i) => 
    <li key={i}>
      <p><span>{x.title}</span> was relased on {x.released_on}. Out of {x.total_votes} total votes, {x.title} has an average vote of {x.average_votes} and a popularity score of {x.popularity}.</p>
      <img src={x.image_url} alt={x.name}/>
      <p>{x.overview}</p>
    </li>
    );
    return (
    <section className="column-container"> 
      <h3>Results from the MovieDB API</h3>
      <ul>{JSXArray}</ul>
    </section>
    )
  };
}

export default MovieDB;