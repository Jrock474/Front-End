function getRecipe (){
    fetch(`https://api.api-ninjas.com/v1/recipe?query=asparagus`)
    .then(resp => {
        return resp.json
    })
    .then(Recipe =>{
        console.log(Recipe)
    })
}

//I'll be working on this api for while