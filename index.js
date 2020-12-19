var readlineSync= require("readline-sync")
const chalk=require("chalk")

var house_id=0
var houses =["Gryffindor","Slytherin","Hufflepuff","Ravenclaw"]

var score=0

//questions related to Gryffindor
var gryffindor=[{
  question: "Only a true Gryffindor can pull ______ out of the sorting hat \n",
  answer: "Sword of Gryffindor"
},{
  question: "In a quidditch match who catches a snitch \n",
  answer: "Seeker"
},{
  question:"Who is the head of Gryffindor house? \n",
  answer:"Minerva McGonagal"
}]


// questions related to Slytherin
var slytherin=[{
  question: "Who is the head of Slytherin house ? \n",
  answer: "Severus Snape"
},{
  question: "Who built the chamber of Secrets ?\n",
  answer: "Salazar Slytherin"
},{
  question:"What is the ability to speak with snakes known as? \n",
  answer: "Parseltongue"
}]


// questions related to Hufflepuff
var hufflepuff=[{
  question:"Who is the head of Hufflepuff house? \n",
  answer:"Pomona Sprout"
},{
  question: "Who is the house ghost of Hufflepuff? \n ",
  answer: "The Grey Lady"
},{
  question:"What is the symbol of Hufflepuff? \n",
  answer: "Badger",
}]


//questions related to Ravenclaw
var ravenclaw=[{
  question:"Who is the head of Ravenclaw house? \n",
  answer:"Filius Flitwick"
},{
  question:"Who built the Grand Staircase at Hogwarts? \n",
  answer:"Rowena Ravenclaw"
},{
  question:"What is the symbol of Ravenclaw house? \n",
  answer:" Eagle "
}]


function welcome(){
  //welcome message
  var userName= readlineSync.question("What is your name? ")
  console.log(userName+" welcome to Hogwarts! ")

  //Sorting Hat
  var index=readlineSync.keyInSelect(houses,'Sorting Hat would like to know which house you prefer')
  house_id=index
  console.log("welcome  to "+houses[index]+"\nWooho! Head to your common room")
}

function play(question,answer){
  var userAnswer
  //display according to house color
  switch(house_id){
    case 0: userAnswer=readlineSync.question(chalk.red(question))
            break;
    case 1: userAnswer=readlineSync.question(chalk.green(question))
            break;
    case 2: userAnswer=readlineSync.question(chalk.yellow(question))
            break;
    case 3: userAnswer=readlineSync.question(chalk.blue(question))
            break;
  }
  
  //checking if answer is correct
  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("Wohoo! You guessed it right ");
    score = score + 1;
    
  } else {
    console.log("Oops! It's wrong");   
  }
}


function game(){
 var ch=houses[house_id] //current house
 console.log("Welcome young "+ch+" \n To enter the common room you need to answer 3 questions\n")
 console.log(house_id)

 if(ch==="Gryffindor"){
   for(var i=0;i<gryffindor.length;i++){
      play(gryffindor[i].question,gryffindor[i].answer)
      }
 }
 else if(ch==="Slytherin"){
   for(var i=0;i<slytherin.length;i++){
      play(slytherin[i].question,slytherin[i].answer)
      }
 }
 else if(ch==="Hufflepuff"){
   for(var i=0;i<hufflepuff.length;i++){
      play(hufflepuff[i].question,hufflepuff[i].answer)
      }
 }
 else if(ch==="Ravenclaw"){
   for(var i=0;i<ravenclaw.length;i++){
      play(ravenclaw[i].question,ravenclaw[i].answer)
      }
 }
}


//display result
function result(){
  if(score==3)
   console.log("You are indeed a true "+houses[house_id]+" Welcome to the common room")
  else 
    console.log("You missed it! a young "+houses[house_id]+" won't give up. Try again")
}


welcome()
game()
result()
