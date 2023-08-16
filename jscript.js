// EXERCISE API GENERATOR

const submitQuery2 = document.getElementById("api-query2");
const userInput2 = document.getElementById("query-input2");
const exercisesDiv = document.getElementById("exercise-list");

const fetchData2 = () => {
    const inputValue2 = userInput2.value; 
    const url = `https://api.api-ninjas.com/v1/exercises?muscle=${inputValue2}`; 
    const key = {
        headers: { 'x-api-key': '9uIr2fvAn8JOJkk8M5TFFV4EUTHMNNtuXdcsIQkj' }
    };

    exercisesDiv.innerHTML = "";
    fetch(url, key)
    .then(res => res.json())
    .then(exercises => {
        console.log('Fetched data:', exercises);
        exercises.forEach(exercise => {
            const exerciseItem = document.createElement('div');
            const titleElement = document.createElement('p');
            const diffList = document.createElement('p')
            diffList.innerText = exercise.difficulty;
            titleElement.innerText = exercise.instructions;
            exerciseItem.innerText = exercise.name;
            exerciseItem.appendChild(diffList);
            exerciseItem.appendChild(titleElement);
            exercisesDiv.appendChild(exerciseItem);
            
            titleElement.style.background ='wheat' 
            titleElement.style.border = 'solid 10px black';
            titleElement.style.padding = '10px';
        })
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}
submitQuery2.addEventListener("click", () => { 
    fetchData2();
});


// Recipe API
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
            titleElement.style.border = 'solid 10px black';
            titleElement.style.backgroundColor = 'wheat'
            titleElement.style.padding = '10px';
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

 /*Get the button:*/

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
/*end of button to top*/



