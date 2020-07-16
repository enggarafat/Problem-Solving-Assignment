// assignment no.1(feetToMile)

function feetToMile(feet){
    var goj = feet / 3;
    var mile = goj / 1760;
    
    if(mile < 0){
        return "It is not possible";
    }
    else{
        return mile;
    }

}
var result = feetToMile(25000);
console.log(result, "mile");

// assignment no.2()