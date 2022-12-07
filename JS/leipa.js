var sandwich = {
    liha:"",
    juusto:"",
    leipa:"",
    lisuke:"",
}
function teeLeipa(){
    var userValue;
    for(let x in sandwich){
        userValue = prompt ("Anna " + x);
        sandwich[x] = userValue;
    }
    document.write("Leipasi on " + sandwich.liha + ", " + sandwich.juusto + ", " + sandwich.leipa + ", " + sandwich.lisuke + ", Ole hyvä!");
}
teeLeipa();