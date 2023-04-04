const readlineSync = require('readline-sync');


console.log("Welcome to the quiz")
var username = readlineSync.question("What is your name: \n")

console.log("Hello " + username + ", Let's Play the Quiz!");

console.log('Rules and Instructions: ');
console.log('1. ',username + ', There are 10 questions on biology and all questions are compulsary')
console.log('2. You will get 2 points on each right answer.')
console.log('3. One point will be deducted for one wrong answer.')
console.log('4. In MCQ Based questions you have to type serial number/index value.')


var leaderboard = [
    { name: 'Saka - the starboy', score: '17' },
    { name: 'Vini', score: '15' },
    { name: 'Gavi', score: '13' }
];

var mcqList = [
  {
    array : ['Metathorax', 'Prothorax & Mesothorax', 'Prothorax', 'Mesothorax'],
    question : 'Tegmina in cockroach arises from ?  ',
    answer : 'Mesothorax'
  },
  {
    array : ['Family – Poaceae', 'Order – Monocotyledonae', 'Division – Angiospermae', 'Genus – Triticum'],
    question : 'Select the incorrect match w.r.t. the Taxonomic categories of wheat ',
    answer : 'Order – Monocotyledonae'
  },
  {
    array : ['Eight', 'Four', 'Five', 'Twenty'],
    question : 'Water channels are made up of how many different types of aquaporins ? ',
    answer : 'Eight'
  },
  {
    array : ['Rhizobium', 'Thiobacillus', 'Anabaena', 'Azotobacter'],
    question : 'Which of the given prokaryotes fixes nitrogen symbiotically as well as in a free-living state ? ',
    answer : 'Anabaena'
  },
  
  {
    array : ['60', '30', '120', '40'],
    question : ' In the Mendelian dihybrid cross, out of 240 individuals obtained in the F2 generation, how many of the offspring would be pure homozygous ? ',
    answer : '60'
  },
  {
    array : ['Commensalism', 'Mutualism', 'Amensalism', 'Competition'],
    question : 'Which of the given population interactions is an example of Epiphytes growing on mango trees ? ',
    answer : 'Commensalism'
  },
  {
    array : ['Dugong', 'Blue whale', 'River Dolphin', 'Pygmy Killer Whale'],
    question : 'What is the name of India\'s National Aquactic Animal: ',
    answer : 'River Dolphin'
  },
  {
    array : ['anaemia', 'osteomalacia', 'xerophthalmia', 'pellagra'],
    question : ' The disease caused due to deficiency of nicotinic acid is ',
    answer : 'pellagra'
  },
  {
    array : ['Primary treatment', 'Secondary treatment', 'Tertiary treatment', 'Both (1) and (2)'],
    question : 'During which stage of the purification of the sewage water are microbes used? ',
    answer : 'Secondary treatment'
  },
  {
    array : ['Presbyopia', 'Night blindness', 'Diabetes insipidus', 'Haemophilia'],
    question : 'This disease falls under the same category as colourblindness in man ',
    answer : 'Haemophilia'
  },
];

var score= 0;

function quizMcq(listOfAnswers, question, answer) {
    var userAnswer = readlineSync.keyInSelect(listOfAnswers, question);
    console.log('\n');
    if (listOfAnswers[userAnswer] === answer) {
        console.log('You are Right.');
        score = score + 2;
    } else {
        console.log('You are Wrong.');
        console.log('The Correct Answer is: ', answer);
        score = score - 1;
    }

    if (score < 0) {
        score = 0;
    }

    console.log('Score is: ', score);
}

for(var i = 0;i < mcqList.length; i++){
  console.log('\n');
  quizMcq(mcqList[i].array,mcqList[i].question,mcqList[i].answer);
  console.log('*******************************');
}

console.log('\n');
console.log('Congratulations,',username,'your Total Score is: ',score);
console.log('\n');
console.log('Thanks for Solving the Quiz,if you have beaten the score that is on the leaderboard than Please take the Screenshot of the Score and Send it to Aditya.');
