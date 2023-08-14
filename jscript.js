const queryForm = document.getElementById("query-form");
const apiDataList = document.getElementById("api-data-list");

queryForm.addEventListener("submit", async event => {
    event.preventDefault();

    const apiQueryInput = document.getElementById("api-query");
    const apiUrl = `https://api.api-ninjas.com/v1/recipe?query=${apiQueryInput.value}`;
})
console.log