import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Card from "../components/Card";
import { FormBtn } from "../components/Form";

class MovieSaved extends Component {

    // Set State
    state = {
        movies: []
    };
    // When page loads, get saved books from db
    componentDidMount() {
        this.loadMovies()
    };
    // Method for loading books from db
    loadMovies = () => {
        API.loadSavedMovies()
            .then(res => this.setState({ movies: res.data }))
            .catch(err => console.log(err));
    };
    // Method for deleting a saved book, asking for a confirm to make sure
    handleDelete = (id) => {
        if (window.confirm("Delete this book from your saved books?")) {
            API.deleteMovie(id)
                .then(res => this.loadMovies())
                .catch(err => console.log(err));
        };
    };
    // Rendering, mapping over saved books to render each
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron>
                    <h1>Saved Movies</h1>
                    <h5>A list of your current saved books...</h5>
                </Jumbotron>
                {this.state.movies.map(movie => (
                    <React.Fragment>
                    <Card key={movie._id}
                        title={movie.title}
                        authors={movie.authors}
                        description={movie.description}
                        image={movie.image}
                        infoLink={movie.link}
                        display="Delete Movie"
                    />
                    <FormBtn onClick={() => this.handleDelete(movie._id)}>Delete Movie</FormBtn>
                    </React.Fragment>
                ))}
            </div>
        )
    };
};

export default MovieSaved;