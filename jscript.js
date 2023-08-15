const submitQuery = document.getElementById("api-query");
const userInput = document.getElementById("query-input");
const recipesDiv = document.getElementById("recipe-list");

const fetchData = () => {
    const inputValue = userInput.value;
    const url = `https://api.api-ninjas.com/v1/recipe?query=${inputValue}`;
    const key = {
        headers: { 'x-api-key': '9uIr2fvAn8JOJkk8M5TFFV4EUTHMNNtuXdcsIQkj' }
    };
    fetch(url, key)
    .then(res => res.json())
    .then(recipes => {
        console.log('Fetched data:', recipes);
        recipes.forEach(recipe => {
            const recipeItem = document.createElement('div');
            const titleElement = document.createElement('p');
            titleElement.innerText = recipe.title;
            recipeItem.innerText = recipe.ingredients;            
            recipesDiv.appendChild(recipeItem);
            recipeItem.appendChild(titleElement);
        })
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}
submitQuery.addEventListener("click", () => {
    fetchData();
});

