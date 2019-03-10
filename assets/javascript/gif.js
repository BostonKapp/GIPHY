$(document).ready(function() {

    var animals = ["dog" ,"cat" , "rabbit" , "hamster" , "bird" , "snake"];

    function populateButtons(arrayToUse, classToAdd, areaToAddTo) {
        $(areaToAddTo).empty();

        for (var i = 0; i < arrayToUse.length; i++) {
            var a = $("<button>");
            a.addClass(classToAdd);
            a.attr("data-type", arrayToUse[i]);
            a.text(arrayToUse[i]);
            $(areaToAddTo).append(a);
        }  

    
    }

    $(document).on("click", ".animal-button", function() {
        $("#animals").empty();
        $(".animal-button").removeClass("active");
        $(this).addClass("active");

        var type = $(this).attr("data-type");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response){
            var results = response.data;

            for (var i = 0; i < results.length; i++) {

                var animalDiv = $("<div class=\"animal-item\">");

                var rating = results[i].rating;
                
                var p = $("<p>").text("Rating: " + rating);
                
            }
        })
    }
})