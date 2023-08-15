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

// API FOR EXERCISES

const submitQuery2 = document.getElementById("api-query2");
const userInput2 = document.getElementById("query-input2");
const exercisesDiv = document.getElementById("exercise-list");

const fetchData2 = () => {
    const inputValue2 = userInput2.value; 
    const url = `https://api.api-ninjas.com/v1/exercises?muscle=${inputValue2}`; 
    const key = {
        headers: { 'x-api-key': '9uIr2fvAn8JOJkk8M5TFFV4EUTHMNNtuXdcsIQkj' }
    };
    fetch(url, key)
    .then(res => res.json())
    .then(exercises => {
        console.log('Fetched data:', exercises);
        exercises.forEach(exercise => {
            const exerciseItem = document.createElement('div');
            const titleElement = document.createElement('p');
            titleElement.innerText = exercise.title;
            exerciseItem.innerText = exercise.instructions; 
            exercisesDiv.appendChild(exerciseItem);
            exerciseItem.appendChild(titleElement);
        })
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}
submitQuery2.addEventListener("click", () => { 
    fetchData2();
});

