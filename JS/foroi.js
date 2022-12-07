const sanat={
    sanat1:'hohhohhoo',
    sanat2:'hohhohhii',
    sanat3:'hohhihhii',
    sanat4:'hihhihhii',
    sanat5:'hahhahhaa',
}
function toUpper(sanat){
    return sanat.toUpperCase();
}
for (let key in sanat ) {
    document.write(sanat[key]);
    document.write(toUpper(' => ' + sanat[key] + '<br>'));
}