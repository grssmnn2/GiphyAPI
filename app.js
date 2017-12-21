$(document).ready(function () {
    // make initial array of buttons for user to choose from
    var animals = ["Dog", "Cat", "Elephant", "Gorilla", "Giraffe", "Penguin", "Porcupine", "Rabbit"];

    // pull data using ajax, reference using response.data
    function displayGiphy() {

        var animal = $(this).attr("data-name");

        // url to pull JSON data from Giphy API showing PG-13 and below with limit of 10
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=DkTJLa4KpLC7I9SSyyOGt6AqDq1dyaGw&q=" + animal + "&limit=10&offset=0&rating=PG-13&lang=en";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (response) {
            for (var j = 0; j < response.data.length; j++) {
                var animalDiv = $("<div class = 'animal'>");
                var rating = response.data[j].rating;
                var ratingParagraph = $("<p>").html("Rating:" + rating);
                animalDiv.append(ratingParagraph);
                var giphyImg = response.data[j].images.fixed_height_still.url;
                var image = $("<img>").attr("src", giphyImg);
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
            var b = $("<button>");
            b.attr("data-name", animals[i]);
            b.addClass("animal");
            b.text(animals[i]);
            $(".buttons").append(b);
        }

    }
    // when search button is clicked, add that animal to the array in button format
    $("#add-animal").on("click", function (event) {
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

});






// function gotData(giphy) {
//     for (var j = 0; j < giphy.data.length; j++) {
//         $("<img>").append(giphy.data[j].url);
//         $(".giphyImages").append("<img>");

//     }

     // when button is clicked, pull GIPHY data and add to giphy div
    //  $(this).on("click", function () {
    //     setup();
    //     gotData();
    // });

// make sure 10 image show up with search, not moving
// if user clicks an image, it begins moving, user clicks again and image stops moving