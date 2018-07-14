var topics = ["cats", "dogs", "snake", "bird", "fish", "pig", "horse"];

function displayGifs() {

    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=3TK0Zw1fnzDSu65Xu36slqEnz2xAfssS";

    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {


      var topicDiv = $("<div class='topic'>");

      var rating = response.Rated;

      var pOne = $("<p>").text("Rating: " + rating);

    
      topicDiv.append(pOne);


      var image = $("<img>")
        .attr("src", data.images.downsized_large.url);

      topicDiv.append(image);

      $("#gif-v").prepend(topicDiv);
    });

  };

  
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

  
  $(document).on("click", ".topic-btn", displayGifs);

  renderButtons();