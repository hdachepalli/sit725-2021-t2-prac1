function Onsite(){
    var textsArray = ["Site 1","Site 2","Site 3","Site 4"]
    var index = getRandomNumberBetween(0,textsArray.length - 1)
    console.log("Index: ", index)
    document.getElementById("heading").innerHTML = textsArray[index];
}

function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}