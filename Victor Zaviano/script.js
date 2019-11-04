(function(){

    var quotes = [
      "Nobody You than the You that You are.",
      "The hustle and the work births greatness.. keep pushing.",
      "You smart, you loyal, you a genius.",
      "Out of sight, out of mind",
      "The most beautiful art was never created.",
      "Life is what you make it, so let's make it.",
      "They key is to have every key, the key to open every door.",
      "Learning is cool, but knowing is better, and I know the key to success."
      ];
  
    var images = [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg"
    ];
  
    function chooseOne(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
  
    window.onload = function() {
      var randomImage = chooseOne(images);
      var randomQuote = chooseOne(quotes);
  
      document.getElementById('background-image').style.backgroundImage = 'url("images/'+ randomImage +'")';
      document.getElementById('quote').innerHTML = randomQuote;
      document.getElementById('author').innerHTML = "— " +  'Victor Zaviano' + " —";
  
      document.getElementById('quote').className = 'move';
      document.getElementById('author').className = 'move';
    };
  
  })();