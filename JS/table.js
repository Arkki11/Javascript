var poyta = {
    pituus:"",
    leveys:"",
    korkeus:"",
    vari:"",
    materiaali:"",
}
function teePoyta(){
    var userValue;
    document.write("Poytasi ominaisuudet:");
    for(let x in poyta){
        userValue = prompt ("Anna " + x);
        poyta[x] = userValue;
        document.write("<br>" + x + ": " + userValue);
    }
}
teePoyta();