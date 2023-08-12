const json = `https://api.api-ninjas.com/v1/recipe?query=chicken`
const postList = document.getElementById("post-list")

function getRecipe (){
    fetch (json)
    .then(response => {
        return response.json();

    })
    .then(lists => {
        lists.forEach(x => {
            const listItem = document.createElement("li");
            listItem.innerHTML= ``;
            postList.appendChild(listItem);

        });

    })
}
//I'll be working on this api for while