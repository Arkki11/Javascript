var sanat = ["moi", "hoi", "heh", "hei"];
for (x=0; x < sanat.length; x++){
        /*document.write(sanat[x]);*/
    if (x === sanat.length - 1){
        document.write(sanat[x]);
    } 
    else {
        document.write(sanat[x] + ',  ');' '
    }
}