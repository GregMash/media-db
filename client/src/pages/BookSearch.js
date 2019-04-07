import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import SearchBox from "../components/SearchBox";
import API from "../utils/API";
import Card from "../components/Card";
import { FormBtn } from "../components/Form";

class BookSearch extends Component {
    // Setting state for search input, empty array for books to be called
    state = {
        bookData: [],
        bookInput: ""
    }
    // Method to search for books when submit button pressed
    handleFormSubmit = e => {
        e.preventDefault();
        API.searchBook(this.state.bookInput)
            .then((res) => {
                this.setState({ bookData: res.data.items });
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
        if (window.confirm("Book Saved! View your saved books?")) { window.location.assign("/saved/books") };
    }
    // Method to save a book
    handleBookSave = (id) => {
        const book = this.state.bookData.find(book => book.id === id);
        console.log(book);
        API.saveBook({
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink
        }).then(data => this.saveNotify())
            .catch(err => console.log(err))
    }
    // Rendering, mapping over each book rendered by search
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron>
                    <h1>React Google Books Search</h1>
                    <h5>Use the search below to add new books to your library or wishlist</h5>
                </Jumbotron>
                <SearchBox
                    name="bookInput"
                    onChange={this.handleInputChange}
                />
                <FormBtn onClick={this.handleFormSubmit}
                />
                {this.state.bookData.map(book => (
                    <React.Fragment>
                        <Card key={book.id}
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                            description={book.volumeInfo.description}
                            image={book.volumeInfo.imageLinks.thumbnail}
                            infoLink={book.volumeInfo.infoLink}
                            display="Save Book"
                        ></Card>
                        <FormBtn key={book.id}
                            onClick={() => this.handleBookSave(book.id)}
                        ></FormBtn>
                    </React.Fragment>
                ))}
            </div>
        )
    };
};

export default BookSearch;