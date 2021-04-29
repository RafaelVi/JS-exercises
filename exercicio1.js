let array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];
function soma(array){
    return [...array].reduce((value, nxtValue) => value+nxtValue);    
}
console.log(soma(array));