let firstString = document.getElementById('firstString').innerText;

let upperCaseString = firstString.toUpperCase();

document.getElementById('maiuscString').innerHTML = upperCaseString;

let firstWord = firstString.substring(0,4);
let middleWord = firstString.substring(35,44);

document.getElementById('twoWordString').innerHTML = firstWord += middleWord;

let peopleList = ["Giovanni", " Michele", " Genoveffa", " Pasquale", " Franco"];

document.getElementById('personList').innerHTML = peopleList;

document.getElementById('thirdElement').innerHTML = peopleList[2];

let addedValue = peopleList += ", Matilde";



document.getElementById('addedName').innerHTML = peopleList;


let newNumbers = [184, 25, 33, 21, 23, 48];

document.getElementById('numbersArray').innerHTML = newNumbers;

function easyCalc(){

    let add = newNumbers[2] + newNumbers[4];

    document.getElementById('resultOfAdd').innerHTML = add;

}

easyCalc();


let popArray = newNumbers.pop();

document.getElementById('leaveLast').innerHTML = popArray;

let pushedArray = newNumbers.push(9);

document.getElementById('addedElement').innerHTML = pushedArray;

let shiftedArray = newNumbers.shift();

document.getElementById('leaveFirst').innerHTML = shiftedArray;


let unshiftedArray = newNumbers.unshift(77);

document.getElementById('addAtStart').innerHTML = unshiftedArray;