$(document).ready(function () {
    // make initial array of buttons for user to choose from
    var animals = ["Dog", "Cat", "Elephant", "Gorilla", "Giraffe", "Penguin", "Porcupine", "Rabbit"];

    // pull data using ajax, reference using response.data
    function displayGiphy() {
        // empty giphy div before adding ten new images
        $(".giphyImages").empty();
        var animal = $(this).attr("data-name");

        // url to pull JSON data from Giphy API showing PG-13 and below with limit of 10
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=DkTJLa4KpLC7I9SSyyOGt6AqDq1dyaGw&q=" + animal + "&limit=10&offset=0&rating=PG-13&lang=en";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (response) {
            // other loop added to create 10 giphy images total as requested in url
            for (var j = 0; j < response.data.length; j++) {
                // create div which spans three columns
                var animalDiv = $("<div class = 'animal, col-md-3'>");
                // add rating based on giphy data
                var rating = response.data[j].rating;
                // put rating into a paragraph and add text
                var ratingParagraph = $("<p>").html("Rating:" + rating);
                // add that rating paragraph to the animal div
                animalDiv.append(ratingParagraph);
                // add the image of the actual giph to show on page
                var giphyImg = response.data[j].images.fixed_height_still.url;
                // put that image into an image tag
                var image = $("<img>").attr("src", giphyImg);
                // add the image to the animal div
                animalDiv.append(image);
                // send animalDiv to giphyImages Div on html page
                $(".giphyImages").prepend(animalDiv);
               
            }
        });

    }

    // make a function that takes user input and adds button/also searchable
    function addButton() {
        // this keeps every button from adding over and over when search is pressed
        $(".buttons").empty();

        // make for loop to create button for each member of array and put into buttons div
        for (var i = 0; i < animals.length; i++) {
            // create button variable to reduce text
            var b = $("<button>");
            // add the data-name attribute
            b.attr("data-name", animals[i]);
            // add the animal class
            b.addClass("animal");
            // add text to each button
            b.text(animals[i]);
            // add each button to the button div
            $(".buttons").append(b);
        }

    }
    // when search button is clicked, add that animal to the array in button format
    $("#add-animal").on("click", function (event) {
        // prevents webpage from navigating elsewhere
        event.preventDefault();

        // variable animal is whatever what entered by user in text box
        var animal = $("#animal-input").val().trim();
        // push animal to the array
        animals.push(animal);
        //   run addButton function to create button for each animal user typed in search box
        addButton();


    });
    // new elements gain features of preexisting buttons
    $(document).on("click", ".animal", displayGiphy);

    addButton();

    // $(document).on("click", ".animal", giphyImg.replace(response.data[j].images.fixed_height_still.url, response.data[j].images.preview.mp4));

    // write function to make images move on click
    // write function to make images stop moving on other click

});



