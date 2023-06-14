var randomNum1=Math.floor(Math.random()*6)+1;
var diceNumber1="dice"+randomNum1+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",diceNumber1);

var randomNum2=Math.floor(Math.random()*6)+1;
var diceNumber2="dice"+randomNum2+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",diceNumber2);

if(randomNum1>randomNum2){
   document.querySelector("h1").innerHTML="Player 1 Wins!!";
}
else if(randomNum1<randomNum2){
    document.querySelector("h1").innerHTML="Player 2 Wins!!";

}
else{
    document.querySelector("h1").innerHTML="Draw!!";

}
