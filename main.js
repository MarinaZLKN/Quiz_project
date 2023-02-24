//array with the questions
const questions = [
    {
        question: "Какой язык работает в браузере?",
        answers: ["Java", "C", "Python", "Javascript"],
        correct: 4,
    },
    {
        question: "Что означает CSS?",
        answers: [
            "Central Style Sheets",
            "Cascading Style Sheets",
            "Cascading Simple Sheets",
            "Cars SUVs Sailboats",
        ],
        correct: 2,
    },
    {
        question: "Что означает HTML",
        answers: [
            "Hypertext Markup Language",
            "Hypertext Markdown Language",
            "Hyperloop Machine Language",
            "Helicopters Terminals Motoboats Lamborginis",
        ],
        correct: 1,
    },
    {
        question: "В каком году был создан Javascript?",
        answers: ["1996", "1995", "1994", "Все ответы неверные"],
        correct: 2,
    },
];

// finding the quiz-header's element by id
const headerContainer =document.querySelector('#header'); // wrapper for title
const listContainer = document.querySelector('#list'); // wrapper for answers
const submitBtn = document.querySelector('#submit') // button Submit

//clearing the html
function clearPage(){
    headerContainer.innerHTML ='';
    listContainer.innerHTML ='';
}

//game variables
let score = 0; //quantity of the correct answers
let questionIndex = 0; //current question

clearPage();
showQuestion();
//check answers button
submitBtn.onclick = checkAnswer;
// submitBtn.addEventListener('click', checkAnswer);

//rendering the question with all possible answers
function showQuestion () {
    // the html piece responsible for question
    // %title% - is temporary symbol for the question, which is to be replaced
    const headerTemplate = `<h2 class="title">%title%</h2>`;
    // replace method does not change the original sting, but creates another; so we put result into a new variable
    // replacing the symbol with real question
    const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
    //adding the question to the html
    headerContainer.innerHTML = title;

    //Answers

    //переменная для проверки истинности ответа
    let answerNumber = 1;
    // iterring all the answers
    for( let answerText of questions[questionIndex]['answers']){
        //the html piece for the answers
        const questionTemplate =
            `<li>
                <label>
                    <input value="%number%" type="radio" name="answer" class="answer">
                    <span>%answer%</span>
                </label>
            </li>`;

        //replacing temporary symbol in span with real answer values,so we can see them in question box
        //let answerHTML = questionTemplate.replace('%answer%', answerText);
        //changing the value of number - here were adding the flag for answer from 1 to 4
        //answerHTML = answerHTML.replace('%number%', answerNumber);
        //better syntax:
        const answerHTML = questionTemplate
            .replace('%answer%', answerText)
            .replace('%number%', answerNumber);



        // to show all 4 answers, not only 1
        listContainer.innerHTML = listContainer.innerHTML + answerHTML;
        //listContainer.innerHTML += answerHTML; -> better syntax
        answerNumber++;
    }
}

function checkAnswer () {
    // finding the input that has been chosen
    const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');

    //here we check if any of answers was chosen
    // if not
    if(!checkedRadio){
        submitBtn.blur();
        return  //function just finishes its work(will be null)
    }

    //here we hold the value of chosen answer
    const userAnswer = parseInt(checkedRadio.value); //parseInt -> to make a number(by default it is a string)
    console.log(userAnswer)

    // checking if answer is correct then score +1
    if (userAnswer === questions[questionIndex]['correct']){
        score ++;
    }
    //if current question is not last:
    if(questionIndex !== questions.length - 1){
        //act this way:
        console.log(' not last')
        questionIndex++;
        clearPage();
        showQuestion();
        return;
    } else {
        //if last, then this way:
        console.log('last')
        clearPage();
        showResults();

    }

}

function showResults (){
    console.log('ShowResults started');
    console.log(score);

    const resultsTemplate =``
}