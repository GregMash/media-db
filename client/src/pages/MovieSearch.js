import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import SearchBox from "../components/SearchBox";
import API from "../utils/API";
import { FormBtn } from "../components/Form";
import Card from "../components/Card";

class MovieSearch extends Component {
    // Setting state for search input, empty array for books to be called
    state = {
        movieData: {},
        movieInput: ""
    }
    // Method to search for books when submit button pressed
    handleFormSubmit = e => {
        e.preventDefault();
        API.searchMovie(this.state.movieInput)
            .then((res) => {
                this.setState({ movieData: res.data });
            })
            .catch(err => console.log(err));
    }
    // Method to change the state of the search value as user enters it
    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };
    // Method to prompt user to view saved books after saving each one
    saveNotify = () => {
        if (window.confirm("Movie Saved! View your saved books?")) { window.location.assign("/movies/saved") };
    }
    // Method to save a book
    handleMovieSave = () => {
        API.saveMovie({
            title: this.state.movieData.Title,
            actors: this.state.movieData.Actors,
            plot: this.state.movieData.Plot,
            image: this.state.movieData.Poster,
            year: this.state.movieData.Year,
            genre: this.state.movieData.Genre,
            ratings: this.state.movieData.Ratings,
            runtime: this.state.movieData.Runtime,
            writer: this.state.movieData.Writer,
            rated: this.state.movieData.Rated

        }).then(data => this.saveNotify())
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron>
                    <h1>React Movie Search</h1>
                    <h5>Use the search below to add new books to your library or wishlist</h5>
                </Jumbotron>
                <SearchBox
                    name="movieInput"
                    onChange={this.handleInputChange}
                />
                <FormBtn onClick={this.handleFormSubmit} />
                <Card key={this.state.movieData.id}
                    title={this.state.movieData.Title}
                    authors={this.state.movieData.Actors}
                    description={this.state.movieData.Plot}
                    image={this.state.movieData.Poster}
                    // infoLink={movie.volumeInfo.infoLink}
                    display="Save Movie"
                />
                <FormBtn onClick={() => this.handleMovieSave()}
                >Save Movie</FormBtn>
            </div>
        )
    };
};

export default MovieSearch;