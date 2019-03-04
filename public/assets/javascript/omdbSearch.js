//const keys = require('../../../config/keys');

//Wrap all functions to be able to execute when page loads 
$(document).ready(() => {
    //========================== Functions ==========================================================


    function findMovie() {
        //prevent the submit button from directing to another page
        event.preventDefault();
        // grab the user input from the movie text box
        let movieSearch = $('#movSearch').val().trim();
        //api key and query url for omdb 
        //console.log(keys);
        //const omdb_Key = keys.omdb.omdb_Key;
        //const queryURL = `https://www.omdbapi.com/?t=${movieSearch}&y=&plot=short&apikey=${omdb_Key}`;
        //ajax call to get info from omdb
        $.ajax({
            url: "/omdb",
            method: 'GET'
        }).then(response => {
            console.log(response);
            displayMovie(response);
        });
    };

    function displayMovie(info) {
        const { Title, Year, Actors, Director, Rated, Plot, Runtime } = info;

        let movieContainer = $(".movieContainer");
        let movieContainerBody = `<p>${Title}</p>`;
        movieContainerBody += `<p>${Year}</p>`;
        movieContainerBody += `<p>${Actors}</p>`;
        movieContainerBody += `<p>${Director}</p>`;
        movieContainerBody += `<p>${Rated}</p>`;
        movieContainerBody += `<p>${Plot}</p>`;
        movieContainerBody += `<p>${Runtime}</p>`;
        
        movieContainer.append(movieContainerBody);
       
    }


    //========================== Main Process ==========================================================

    $('#movieSearch').on('submit', findMovie);


});
