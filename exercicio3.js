const fetch = require('node-fetch');
fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
 .then(response => response.json())
 .then(json => console.log(json.meals.filter((value,index) => index < 10)));