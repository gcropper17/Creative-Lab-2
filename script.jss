
function search(query) {
    const url = `https://api.tvmaze.com/search/shows?q=${query}`;
    fetch(url)
    .then((response) =>  response.json())
    .then((jsonData) => {
      const results = jsonData.map(element => element.show.name);
      const GenreResults = jsonData.map(element => element.show.genres);
      showResults(results);
      console.log(jsonData);
    });
}

function showResults(results) {
  const list = document.getElementById("resultsList");
  list.innerHTML = "";
  results.forEach(result => {
    const element = document.createElement("li");
    element.innerText = result;
    list.appendChild(element);
  });
}


window.onload = () => {
    const searchElement = document.getElementById("searchbox");
    searchElement.onkeyup = (event) => {
        search(searchElement.value);
    };
}

