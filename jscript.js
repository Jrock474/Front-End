const submitQuery = document.getElementById("api-query");
const userInput = document.getElementById("query-input");
const recipesDiv = document.getElementById("recipe-list");

const fetchData = () => {
    const inputValue = userInput.value;
    const url = `https://api.api-ninjas.com/v1/recipe?query=${inputValue}`;
    const key = {
        headers: { 'x-api-key': '9uIr2fvAn8JOJkk8M5TFFV4EUTHMNNtuXdcsIQkj' }
    };

    recipesDiv.innerHTML ="";
    fetch(url, key)
    .then(res => res.json())
    .then(recipes => {
        console.log('Fetched data:', recipes);
        recipes.forEach(recipe => {
            const recipeItem = document.createElement('div');
            const titleElement = document.createElement('p');
            const ingredientsList = document.createElement('p')
            recipeItem.innerText = recipe.title;
            ingredientsList.innerText = recipe.ingredients;
            titleElement.innerText = recipe.instructions; 
            recipesDiv.style.border = 'solid 10px black';
            recipesDiv.style.padding = '10px';
            recipesDiv.appendChild(recipeItem);
            recipeItem.appendChild(ingredientsList);
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



