
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

        // Fix: Iterate through recipes.results using recipes.results.length
        for (let i = 0; i < recipes.results.length; i++) {
            const recipeItem = document.createElement('div');
            const titleElement = document.createElement('p');
            titleElement.textContent = recipes.results[i].title;
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