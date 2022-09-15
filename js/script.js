let firstString = document.getElementById('firstString').innerText;

let upperCaseString = firstString.toUpperCase();

document.getElementById('maiuscString').innerHTML = upperCaseString;

let firstWord = firstString.substring(0,4);
let middleWord = firstString.substring(35,44);

document.getElementById('twoWordString').innerHTML = firstWord += middleWord;

let peopleList = ["Giovanni", " Michele", " Genoveffa", " Pasquale", " Franco"];

document.getElementById('personList').innerHTML = peopleList;

document.getElementById('thirdElement').innerHTML = peopleList[2];

let addedValue = "Matilde";

peopleList.push(addedValue)

document.getElementById('addedName').innerHTML = peopleList;


let newNumbers = [184, 25, 33, 21, 23, 48];

document.getElementById('numbersArray').innerHTML = newNumbers;

function easyCalc(){

    let add = newNumbers[2] + newNumbers[4];

    document.getElementById('resultOfAdd').innerHTML = add.toString;
    


}
