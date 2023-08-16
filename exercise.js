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
            

             exerciseItem.style.color = 'white'
            //  diffList.style.border='5px solid #d3a121'
            titleElement.style.color ='white' 
            // titleElement.style.border = 'solid 10px black';
            // titleElement.style.padding = '10px';
        })
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}
submitQuery2.addEventListener("click", () => { 
    fetchData2();
});


