import React from 'react';
import superagent from 'superagent';

class SearchForm extends React.Component{
  render() {
    return(
      <Form />
    )
  }
};

class Form extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }

  }
  render() {
    return (
      <form id="search-form" /*className="hide"*/>
        <label htmlFor="search">Search for a location</label>
        <input type="text" onChange={this.handleChange} name="search" id="input-search" placeholder="Enter a location here" />
        <button type="submit" onClick={this.fetchCityData}>Explore!</button>
      </form>
    )
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };


  fetchCityData = (event) => {
    event.preventDefault();

    superagent.get('https://blooming-hollows-11631.herokuapp.com/location')
      .query({data: this.state.value})
      .then(result => {
        this.setState({location: result.body});
        console.log(this.state.location);
      })
      .catch((error)=> {
        console.log('THERE\'S BEEN AN ERROR WITH SUPERAGENT', error);
      });

  };


}

export default SearchForm;