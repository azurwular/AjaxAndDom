
     var addquote = function()
     {
         var promise = fetch('https://jokes-plaul.rhcloud.com/api/joke');
     promise.then(function (response) {
       return response.json();
     }).then(function (quote) {
        document.getElementById("quote").innerHTML = quote.joke;
     });
     }
     
     
document.getElementById("btn").onclick= addquote;


