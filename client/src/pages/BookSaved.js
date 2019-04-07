import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Card from "../components/Card";

class BookSaved extends Component {
    // Set State
    state = {
        books: []
    };
    // When page loads, get saved books from db
    componentDidMount() {
        this.loadBooks()
    };
    // Method for loading books from db
    loadBooks = () => {
        API.loadSavedBooks()
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err));
    };
    // Method for deleting a saved book, asking for a confirm to make sure
    handleDelete = (id) => {
        if (window.confirm("Delete this book from your saved books?")) {
            API.deleteBook(id)
                .then(res => this.loadBooks())
                .catch(err => console.log(err));
        };
    };
    // Rendering, mapping over saved books to render each
    render() {
        return (
            <div>
                    <Navbar />
                    <Jumbotron>
                        <h1>Saved Books</h1>
                        <h5>A list of your current saved books...</h5>
                    </Jumbotron>
                    {this.state.books.map(book => (
                        <Card key={book._id}
                            title={book.title}
                            authors={book.authors}
                            description={book.description}
                            image={book.image}
                            infoLink={book.link}
                            display="Delete Book"
                            FormBtn onClick={() => this.handleDelete(book._id)}
                        />
                    ))}
            </div>
        )
    };
};

export default BookSaved;