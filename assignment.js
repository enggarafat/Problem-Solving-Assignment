// assignment no.1(feetToMile)

function feetToMile(feet){
    var goj = feet / 3;
    var mile = goj / 1760;
    
    if(mile < 0){
        return "It is not possible.Because distance never be negative";
    }
     else{
         return mile;
     }

}
var result = feetToMile(25000);
console.log(result, "mile");

// assignment no.2(woodCalculator)


function woodCalculator(chair,table,bed){
    var cubicFeetForChair = 1;
    var cubicFeetForTable = 3;
    var cubicFeetForBed =5;
    var woodCountForChair = chair * cubicFeetForChair;
    var woodCountForTable = table * cubicFeetForTable;
    var woodCountForBed = bed * cubicFeetForBed;
    var totalWood = woodCountForChair + woodCountForTable + woodCountForBed;
    if(totalWood<=0){
        console.log("It is not possible")
    }
    return totalWood;
}
var result = woodCalculator(6,2,3);
console.log("Required Wood:", result,"cubic feet.")


// assignment no.3(brickCalculator)


function brickCalculator(storied){

    if(storied <= 10 && storied > 0){
        var numberOfBrick1 = storied *  15000;
        return numberOfBrick1;
    }
    else if(storied >= 11 && storied <=20){
        var numberOfBrick2 = (storied-10) * 12000;
        var totalBrick = 150000 + numberOfBrick2;
        return totalBrick;
    }
    else if(storied > 20){
        var numberOfBrick3 = (storied-20) * 10000;
        var totalBrick = 270000 + numberOfBrick3;
        return totalBrick;
    }
    else if(storied < 0){
        return "No, result.";
    }
}
var building = 24;
console.log("Number of bricks:",brickCalculator(building));



// assignment no.4(tinyFriend)



function tinyFriend(friends){
    var tiny = friends[0];
    for(var i = 0; i<friends.length; i++){
        var friend = friends[i];
        if(tiny.length > friend.length){
            tiny = friend;
        }
    }
    return tiny;


}
var allFriends=["Sawda", "Maisha", "Riya", "Syinthia", "Ahosan Rahat", "Mushfika anjum"];
var result = tinyFriend(allFriends);
console.log("Tiny friend :", result);


