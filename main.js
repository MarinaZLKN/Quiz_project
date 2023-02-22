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
submitBtn.onclick = checkAnswer();
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
    // iterring all the answers
    for( let answerText of questions[questionIndex]['answers']){
        //the html piece for the answers
        const questionTemplate =
            `<li>
                <label>
                    <input type="radio" name="answer" class="answer">
                    <span>%answer%</span>
                </label>
            </li>`;

        //replacing temporary symbol with real answer values
        const answerHTML = questionTemplate.replace('%answer%', answerText);
        // to show all 4 answers, not only 1
        listContainer.innerHTML = listContainer.innerHTML + answerHTML;
        //listContainer.innerHTML += answerHTML; -> better syntax
    }
}

function checkAnswer () {
    console.log('ready');
    // finding the input that has been chosen
    const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');
    console.log(checkedRadio)
    console.log('test');
}

