
const submitQuery = document.getElementById("api-query");
const userInput = document.getElementById("query-input");
const recipesDiv = document.getElementById("recipe-list");

const fetchData = () => {
    const inputValue = userInput.value;

    let url = `https://api.api-ninjas.com/v1/recipe?query=${inputValue}`;
    let key = {
        headers: { 'x-api-key': '9uIr2fvAn8JOJkk8M5TFFV4EUTHMNNtuXdcsIQkj' }
    };

    fetch(url, key)
    .then(res => res.json())
    .then(recipes => {
        console.log('Fetched data:', recipes);

        const dataArr = recipes.results
        for (let i = 0; i < dataArr.length; i++) {
          const recipeItem = document.createElement('div');
          const titleElement = document.createElement('p');
          titleElement.innerText = dataArr[i].title; 
          recipeItem.appendChild(titleElement);
          recipesDiv.appendChild(recipeItem);
      }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

submitQuery.addEventListener("click", () => {
    fetchData()
});