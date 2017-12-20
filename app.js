// make initial array of buttons for user to choose from
var animals = ["Dog", "Cat", "Elephant", "Gorilla", "Giraffe", "Penguin", "Porcupine", "Rabbit"];

// make a function that takes user input and adds button/also searchable
function addButton(){

    $(".buttons").empty();

// make for loop to create button for each member of array and put into buttons div
for (var i = 0; i<animals.length; i++){
    $(".buttons").append("<button>"+ animals[i] + "</button>");
}

}

$("#add-animal").on("click", function(event) {
    event.preventDefault();

    // This line grabs the input from the textbox
    var animal = $("#animal-input").val().trim();

    // The movie from the textbox is then added to our array
    animals.push(animal);

    // Calling renderButtons which handles the processing of our movie array
    addButton();

  });

  addButton();






// make sure 10 image show up with search, not moving
// if user clicks an image, it begins moving, user clicks again and image stops moving