let url = 'https://api.api-ninjas.com/v1/recipe?query=broccoli'
let key = {
    headers: { 'x-api-key': '9uIr2fvAn8JOJkk8M5TFFV4EUTHMNNtuXdcsIQkj' }
  }
  
    fetch(url,key)
        .then(res => res.json())
        .then(recipes => {
          console.log(recipes)
        })


