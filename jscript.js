
const submitQuery = document.getElementById("api-query");
const userInput = document.getElementById("query-input");


const fetchData = () => {
    const inputValue = userInput.value;
    const url = `https://api.api-ninjas.com/v1/recipe?query=${inputValue}`;
    const key = {

const fetchData = ()=>{
    const inputValue = userInput.value; // Retrieve the input value when the button is clicked
    console.log("user input", inputValue);

    let url = `https://api.api-ninjas.com/v1/recipe?query=${inputValue}`;
    let key = {

        headers: { 'x-api-key': '9uIr2fvAn8JOJkk8M5TFFV4EUTHMNNtuXdcsIQkj' }
    };

    fetch(url, key)

    .then(res => res.json())
    .then(recipes => {
        console.log('Fetched data:', recipes);

        recipes.results.forEach(recipe => {
            const recipeItem = document.createElement('div');
            const titleElement = document.createElement('p');
            titleElement.innerText = recipe.title; 
            recipeItem.appendChild(titleElement);
            recipesDiv.appendChild(recipeItem);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

        .then(res => res.json())
        .then(recipes => {
            console.log(recipes);
        });

}



submitQuery.addEventListener("click", () => {
    fetchData();
});
