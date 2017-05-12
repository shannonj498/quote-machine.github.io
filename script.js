var colors = ["#7287C8", "#C87272", "#72C893", "#72C4C8", "#72A0C8", "#727FC8", "#C872B1", "#C87298"];
  
  // create function to get quote
  function getQuote() {
  $("#target").on('click', function(){
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
      $("#quote-text").text(json.quoteText);
      $("#author").text("- " + json.quoteAuthor);
  });
  });
  }
    
// create function to animate text
function animateText() {

$("#target").on('click', function() {
      $("#quote-text").animate({
          opacity: 0.3
        }, 100,
        function() {
          $(this).animate({
            opacity: 1
          }, 1000); 
        });
  
        $("#icon").animate({
          opacity: 0.3
        }, 100,
        function() {
          $(this).animate({
            opacity: 1
          }, 1000);
        });
  
        $("#author").animate({
          opacity: 0.3
        }, 100,
        function() {
          $(this).animate({
            opacity: 1
          }, 1000);
        });
  });
}


 // Create function to randomize colors
function getRandomColor () {
	var newColor = colors[Math.floor(Math.random() * colors.length)];

	$('body').css('background-color', newColor);
	$('body').css('color', newColor);
	$('#target').css('background-color', newColor);

  }


  $("#target").click(function() {
    getQuote();
    animateText();
    getRandomColor();
  });
  

  getRandomColor();

