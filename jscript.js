function getRecipe (){
    fetch(`https://api.api-ninjas.com/v1/recipe?query=asparagus`)
    .then(resp => {
        return resp.json
    })
    .then(Recipe =>{
        console.log(Recipe)
    })
}

//test


function getExercise(){
fetch('https://api-ninjas.com/api/exercises')

.then(resp => {
    return resp.json
})
.then(Exercise =>{
    console.log(Exercise)
})

}

//run a test

