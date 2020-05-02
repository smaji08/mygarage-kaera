import React, { Component } from "react";
import { Col, Row, Container, Card } from "reactstrap";
import SearchForm from "../components/Input/index";
import MovieDetail from "../components/MovieDetail/index";
import API from "../utils/OMDBAPI";
import MAPI from "../MongoApi/API";
import "./style.css";

class OmdbContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {},
      search: ""
    }
  }

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    console.log(this.props)
    this.searchMovies("Rush");
  }

  searchMovies = query => {
    MAPI.getMovie(query)
      .then(
        API.search(query)
        .then(
          res => {
            this.setState({ result: res.data })
            MAPI.postMovie(res.data)
          }
        )
        .catch(err => console.log(err))
      )
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card id="movieCard"
              heading={this.state.result.Title || "Search for a Movie to Begin"}
            >
              {this.state.result.Title ? (
                <MovieDetail
                  title={this.state.result.Title}
                  src={this.state.result.Poster}
                  director={this.state.result.Director}
                  genre={this.state.result.Genre}
                  released={this.state.result.Released}
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
          </Col>
          <Col size="md-4">
            <Card id="movieSearch" heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;
