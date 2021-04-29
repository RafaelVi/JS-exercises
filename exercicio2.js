const fetch = require('node-fetch');
function verificaIngredientes(objetoPrato){
    let array = [];
    let str = new RegExp("strIngredient");
    for(let campo in objetoPrato){
        if(campo.match(str) && objetoPrato[campo]){
        array.push(objetoPrato[campo]);
    }};
    return array.join(", ");
}
fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
 .then(response => response.json())
 .then(json => console.log(`
Nome: ${json.meals[0].strMeal}
ID: ${json.meals[0].idMeal}
Região: ${json.meals[0].strArea}
Ingredientes: ${verificaIngredientes(json.meals[0])}
Instruções: ${json.meals[0].strInstructions}     
 
 `));
