import React from 'react';
import BookSearch from "./pages/BookSearch";
import BookSaved from "./pages/BookSaved";
import MovieSearch from "./pages/MovieSearch";
import MovieSaved from "./pages/MovieSaved";
import VideoGameSearch from "./pages/VidGameSearch";
import NoMatch from "./pages/NoMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={BookSearch} />
          <Route exact path="/movies/search" component={MovieSearch} />
          <Route exact path="/movies/saved" component={MovieSaved} />
          <Route exact path="/books/search" component={BookSearch} />
          <Route exact path="/books/saved" component={BookSaved} />
          <Route exact path="/videogames/search" component={VideoGameSearch} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
