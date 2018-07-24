var topics = ["cats", "dogs", "snake", "bird", "fish", "pig", "horse"];

function displayGif() {

    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=3TK0Zw1fnzDSu65Xu36slqEnz2xAfssS";

    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
    $("#gif-v").empty();

    var i;
    for (i = 0; i < topics.length; i++) {

      var topicDiv = $("<div class='topic'>");

      var rating = response.data[i].rating;

      var pOne = $("<p>").text("Rating: " + rating);

      topicDiv.append(pOne);

      //make a for loop
      var image = $("<img>");
      image.attr("data-still", response.data[i].images.fixed_height_still.url);
      image.attr("data-animate", response.data[i].images.fixed_height.url);
      image.attr("src", response.data[i].images.fixed_height_still.url);
      console.log(response);

      topicDiv.append(image);

      $("#gif-v").prepend(topicDiv);
      }
    });

  }

  $("#gif-v").on("click", ".gif", function(){  
    console.log(this);
    var state = $(this).attr("data-state");    
    if (state === "still"){
        $(this).attr("src",$(this).attr("data-animate"));
        image = $("<img>").attr("src", response.data[i].images.fixed_height.url);
        $(this).attr("data-state","animate");


    } else if (state==="animate"){
        $(this).attr("src",$(this).attr("data-still"));
        image = $("<img id='still'>").attr("src", response.data[i].images.fixed_height_still.url);
        $(this).attr("data-state","still");
    }
});

  
  function renderButtons() {

   
    $("#button-v").empty();


    for (var i = 0; i < topics.length; i++) {

      
      var a = $("<button>");
    
      a.addClass("topic-btn");
   
      a.attr("data-name", topics[i]);
 
      a.text(topics[i]);
   
      $("#button-v").append(a);
    }
  }

 
  $("#add-gif").on("click", function(event) {

    
    event.preventDefault();
   
    var topic = $("#gif-input").val().trim();

   
    topics.push(topic);

    
    renderButtons();
  });

  
  $(document).on("click", ".topic-btn", displayGif);


  renderButtons();