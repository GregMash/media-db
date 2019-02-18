//========================== Global Variables ==========================================================


//========================== Functions ==========================================================

function findMovie() {
    //prevent the submit button from directing to another page
    event.preventDefault();
    // grab the user input from the movie text box
    let movie = $('#movSearch').val().trim();
    //api key and query url for omdb 
    const keys = require('../../../keys');
    const omdb_Key = keys.omdb.omdb_Key;
    const queryURL = `https://www.omdbapi.com/?t=${movie}&y=&plot=short&apikey=${omdb_Key}`;
    //ajax call to get info from omdb
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(response => {
        console.log(response);
        displayMovie(response);
    });
};

function displayMovie(info) {
    const { Title, Year, Actors, Director, Rated, Plot, Runtime } = info;
    console.log(Title);
}


//========================== Main Process ==========================================================

// when the find button is clicked, execute the findMovie function
$('#find').on('click', findMovie);