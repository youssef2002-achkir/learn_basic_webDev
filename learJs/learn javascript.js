



//main code
/*document.getElementById("test").innerHTML = repetition + "     " + repetition + "    " +
repetition + "  " + repetition + "    " +
repetition + "  " + repetition + "    " +
repetition + "  " + repetition + "    " +
repetition + "  " + repetition + "    " +
repetition + "  " + repetition + "    " +
repetition + "  " + repetition + "  " ;
 if (youssef - hamza == 500) {
     document.getElementById("test").innerHTML = repetition;
     console.log("Absonetley true");
     document.getElementById("test").innerHTML = youssef + " " +  "times" + " "  + " " + repetition;    
 } else{
    document.getElementById("test").innerHTML = repetition + "     " + repetition + "    " +
    repetition + "  " + repetition + "    " +
    repetition + "  " + repetition + "    " +
    repetition + "  " + repetition + "    " +
    repetition + "  " + repetition + "    " +
    repetition + "  " + repetition + "    " +
    repetition + "  " + repetition + "  "
 }*/

 /*var youssef = 1000,
    repetition = "my name is youssef achkir",
    hamza=  500,
    hasRamid = true,
    myName = ["youssefe" , "achkir", 20 ,"years" , "old"],
    landing = {first:"YOUSSEF", last:"ACHKIR"},
    texts = "My name is youssef",
    myAge = 20,
    rtrtrt,
    me = null,
    faut = 10 + "10",
    div = document.getElementById("test");
div.innerHTML = myAge + " is my age " + " and " + myName[0] + " is my name.";
 div.innerHTML = "I have told you this for " + youssef + " times! didn't I??";
function changecolor(id){
    document.body.style.background = 
    document.getElementById(id).innerHTML 
}

document.getElementById("test").innerHTML = youssef;
document.write("Hello from me other side");
alert("Hello there");
console.log("Heloo from condsole");
"<br><br><br><br<>"
document.getElementById("test").innerHTML = "hello world";*/

//var yourName = prompt("Enter your name:")

/*document.getElementById("test").innerHTML = x * y;

while (x + y > 80) {
    document.getElementById("test").innerHTML = a + 1;
    x--;
    y--;
}*/

/*if (yourName == "Youssef Achkir"){
    document.getElementById("test").innerHTML =
    "Hello Mr " + yourName + " Please come this is your company";

}else {
    document.getElementById("test").innerHTML =
    "Welcome to YOUSSEF ACHKIR's website";
}
var today= new Date(); 
var hourNow = today.getHours();
var greeting; 

if (hourNow > 18) { 
greeting = 'Good evening';
} 

else if (hourNow > 12) { 
greeting = 'Good afternoon';
} 

else if (hourNow > O) { 
greeting =  'Good morning';
} 

else { 
greeting =  'Welcome';
} 
document.write(greeting);

var colors = ['white', 'black', 'pink', 'red'];
for (let i = 3; i >= 0; i--) {
    document.body.style.background = 
document.getElementById("test").innerHTML = colors[i];
    
}
function getSize(height, width, large){
    var volume = height * width * large,
        area = height * width,
        size = [volume, area];
    return size;
}
 
var volumeOne = getSize(5, 6, 9)[0];
var sizeOne = getSize(5, 6, 9)[1];
console.log("The volume is " + volumeOne + " and " + "The size is " +  sizeOne)*/




/*var color = prompt("Enter your background color please");

switch (color) {
    case "red":
        document.body.style.background = 
        document.getElementById("red").innerHTML;
        break;
    case "green":
        document.body.style.background = 
        document.getElementById("green").innerHTML;
        break;
    case "yellow":
        document.body.style.background = 
        document.getElementById("yellow").innerHTML;
        break;  
    case "pink":
        document.body.style.background = 
        document.getElementById("pink").innerHTML;
         break; 
    case "black":
        document.body.style.background = 
        document.getElementById("black").innerHTML;
        break; 
    default:
        alert("You have not chosen one of selected colors so it will be a difult color");
        document.body.style.background = 
        document.getElementById("blue").innerHTML;
        break;
}




var TEST = document.getElementById("test"); 
onkeyup =  function (){
    var i = document.getElementById("number").value;
    if(i === "")
    {
        TEST.innerHTML = "This field can not be empty";
    }
    else if(i == "0" || i > 9999 || i < 0)
    {
        TEST.innerHTML = "This value is unvalid";
    }
    else
    {
        for (let j = 1; j <= i; j++) 
        {
                document.write(i + ' * ' + j + " = " + (i * j) + "<br>");
        }
    }   
}*/


/*    
onload = function(){
    alert("Hello from me other side");
}

onclick = function(){
    var clickMe = document.getElementById("test");
    clickMe.innerHTML = "Hello from inside the page";

}

ondblclick = function(){
    var doubleClick = document.getElementById("test");
    doubleClick.innerHTML = "Hello from inside page\nHello from inside page";
}

onkeydown = function(){
    var keyDown = document.getElementById("number").value;
    document.getElementById("test").innerHTML = keyDown;
}

onkeypress = function () {
    var keyPress = document.getElementById("number").value;
    document.getElementById("test").innerHTML = keyPress * 2;
}

onkeyup = function(){
    var keyUp = document.getElementById("number").value;
    document.getElementById("test").innerHTML = keyUp - 4;
}

var myText = document.getElementById("test");
myText.onmouseover = function(){
    myText.innerHTML = "You hovered the damn text";
}

myText.onmouseout = function(){
    myText.innerHTML = "You was on the damn text";
}

onchange = function(){
    var multiplyBy = document.getElementById("select").value
        multiplyByMe = document.getElementById("number").value;
    document.getElementById("test").innerHTML = multiplyBy * multiplyByMe ;
}
*/

//var myWork = ['youssef', 'achkir', '19', 'inpt']
/*var  myStudy = new Array('youssef', 'achkir', '19', 'inpt'),
     myDate = new Date();

console.log( myStudy);

if (Array.isArray( myStudy )) {
    
    console.log("Yes this is an array");
}else{
    console.log("No it is not an array");
}

console.log(myStudy.length);

//myStudy.length = 2;

console.log(myStudy.length);

console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toLocaleString());

console.log(myStudy.join("|"));

var  itemOne = myStudy.unshift("I'am"),
     lastItem = myStudy.push("is my school"),
     middleItem = myStudy.splice(2, 0, "that is my name");
console.log(myStudy);

var deleteOne = myStudy.shift(),
    deleteLast = myStudy.pop(),
    deleteMiddle = myStudy.splice(3, 2);
console.log(myStudy);


var  myStudy = new Array('youssef', 'achkir', 'inpt', '19'),
     myBusiness = ['Name', 'lastName', 'Age', "school"];

console.log(myStudy);
//console.log(myStudy.sort());
//console.log(myStudy.concat(myBusiness, myStudy.slice(0, 4)));

console.log(myStudy.indexOf("inpt"));
*/
/*
var primaryNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    realOnes = new Array(),
    fakeOnes = new Array(),
    n = prompt('Enter a number:');

for (let i = 2; i < n; i++) {
    if (n % i == 0 | fakeOnes[fakeOnes.length - 1] == n) {
        console.log(false);
        fakeOnes.push(n);
    }else{
        realOnes.push(n);
    }
    
}


console.log("Primary Numbers: " + realOnes);
console.log("Ordinary Numbers: " + fakeOnes);
*/
/*
var myString = 'Hello my name is youssef achkir and I\'am 19 years old so I\'am youssef so that is me ',
    myNumber = 222;
//Check and Lenght
console.log(myString);
console.log(myString.length);
console.log(typeof(myString));

console.log(myNumber);
console.log(typeof(myNumber));

//Change item type to string
console.log(String(myNumber));
console.log(typeof(String(myNumber)));

console.log(myNumber.toString());
console.log(typeof(myNumber.toString()));

//Search an item inside the string
console.log(myString.indexOf("youssef", 18));
console.log(myString.lastIndexOf("youssef"));
console.log(myString.search("youssef"));

//Split a sting methods
console.log(myString.split(" ", 22));
console.log(myString.slice(0, 22));
console.log(myString.substr(0, 22));
console.log(myString.substring(22, 0));

//Replace and locate an item inside the item
console.log(myString.charAt(14));
console.log(myString.charCodeAt(14));
console.log(myString.replace("19", "20"));

//Concatination of many strings
console.log(myString.concat(" And my school now is INPT"));
console.log(String.fromCharCode(100, 30, 99, 103, 44));

//Convert letters
console.log(myString.toLowerCase());
console.log(myString.toUpperCase());

//additional method
console.log(myString.trim());

//chain
var thatIsMe = myString.split(" ").concat("That is really me");
console.log(thatIsMe);
*/

/*
var clickHere = document.getElementById("clickMe");

clickHere.onclick = function(){
    var firstOne = document.getElementById("firstYear").value;
    var secondOne  = document.getElementById("secondYear").value;
    var years = firstOne;
    document.write("<select>");
    for(;years <= secondOne;){
        document.write("<option>" + years + "</option>");
        years++;
    }
    document.write("</select>");
}
*/



