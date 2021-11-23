fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("quotePar").innerHTML =
      "&#8220;" + data.quotes[0].text + "&#8221;";
    document.getElementById("author").innerHTML =
      "&#8212;" + data.quotes[0].author;
  });
