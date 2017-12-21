// make initial array of buttons for user to choose from
var animals = ["Dog", "Cat", "Elephant", "Gorilla", "Giraffe", "Penguin", "Porcupine", "Rabbit"];

function giphy() {
    var animal = $(this).attr("data-name");
    // function to pull JSON data from Giphy API showing PG-13 and below with limit of 10
    var queryURL = "https://api.giphy.com/v1/gifs/trending?t=" + animal + "&api_key=DkTJLa4KpLC7I9SSyyOGt6AqDq1dyaGw&limit=10&rating=PG-13";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (data) {
        console.log(data);
    });
}
// make a function that takes user input and adds button/also searchable
function addButton() {
    // this keeps every button from adding over and over when search is pressed
    $(".buttons").empty();

    // make for loop to create button for each member of array and put into buttons div
    for (var i = 0; i < animals.length; i++) {
        $(".buttons").append("<button>" + animals[i] + "</button>");
        $("<button>").attr("data-name", animals[i]);
    }

}

$("#add-animal").on("click", function (event) {
    event.preventDefault();

    // variable animal is whatever what entered by user in text box
    var animal = $("#animal-input").val().trim();
    // push animal to the array
    animals.push(animal);
    // Calling renderButtons which handles the processing of our movie array
    addButton();

});

addButton();






// make sure 10 image show up with search, not moving
// if user clicks an image, it begins moving, user clicks again and image stops moving