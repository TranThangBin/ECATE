"use strict";
const questionsCollection = [
    {
        q: "The mother-in-law is_____________at our house this week.",
        a: ["A. stay", "B. staying", "C. be staying", "D. stayed"],
        ca: "B",
    },
    {
        q: `I bought my wife a(n)_____________hat when i 
            went abroad on a business trip.`,
        a: [
            "A. beautiful large copper Italian",
            "B. beautiful copper large Italian",
            "C. beautiful large Italian copper",
            "D. Italian beautiful large copper",
        ],
        ca: "C",
    },
    {
        q: `When travelling in Europe, we tried to_____________
            at least an hour in medieval town to explore it.`,
        a: ["A. stop out", "B. stop up", "C. stop in", "D. stop off"],
        ca: "D",
    },
];
let quizIndex;
let exp;
const expContainer = document.getElementById("exp");
const answerContainer = document.getElementById("answer-container");
const answers = answerContainer?.getElementsByTagName("button");
const questionContainer = document.getElementById("question");
const checkAnswerButton = document.getElementById("check-answer");
const correctPanel = document.getElementById("correct-panel");
const incorrectPanel = document.getElementById("incorrect-panel");
const continueButtons = document.querySelectorAll("[data-continue]");
const progressBar = document.getElementById("progress");
initializeQuiz();
function initializeQuiz() {
    exp = 0;
    resetState();
    if (!answers)
        return;
    quizIndex = 0;
    generateQuiz();
    for (let i = 0; i < 4; i++)
        answers[i].addEventListener("click", answerClicked);
    checkAnswerButton?.addEventListener("click", checkAnswerClicked);
    for (let i = 0; i < 2; i++) {
        const continueOfPanel = continueButtons[i];
        continueOfPanel.addEventListener("click", nextQuestion);
    }
}
function generateQuiz() {
    if (!questionContainer)
        return;
    if (!answers)
        return;
    const currentQuestion = questionsCollection[quizIndex];
    questionContainer.innerText = currentQuestion.q;
    for (let i = 0; i < 4; i++)
        answers[i].innerText = currentQuestion.a[i];
}
function answerClicked(e) {
    if (!answers)
        return;
    const buttonClicked = e.target;
    for (let i = 0; i < 4; i++)
        answers[i].classList.replace("bg-blue-400", "bg-transparent");
    buttonClicked.classList.replace("bg-transparent", "bg-blue-400");
    checkAnswerButton?.classList.replace("bg-blue-700", "bg-blue-400");
    checkAnswerButton?.classList.replace("text-blue-600", "text-white");
}
function checkAnswerClicked() {
    if (!answers)
        return;
    let answerChose;
    for (let i = 0; i < 4; i++)
        if (answers[i].classList.contains("bg-blue-400"))
            answerChose = answers[i].innerText;
    if (!answerChose)
        return;
    const correctAnswer = questionsCollection[quizIndex].ca;
    if (answerChose[0] == correctAnswer) {
        correctPanel?.classList.replace("-bottom-1/4", "bottom-0");
        exp++;
        if (expContainer)
            expContainer.innerText = exp.toString();
    }
    else
        incorrectPanel?.classList.replace("-bottom-1/4", "bottom-0");
    const progress = ((quizIndex + 1) / questionsCollection.length) * 100;
    document.documentElement.style.setProperty("--progress", `${progress}%`);
}
function nextQuestion(e) {
    const continueButtonClicked = e.target;
    const currentPanel = continueButtonClicked.parentElement;
    currentPanel?.classList.replace("bottom-0", "-bottom-1/4");
    quizIndex++;
    if (quizIndex >= questionsCollection.length) {
        clearInterval(startTime);
        const resultPage = document.getElementById("result");
        resultPage?.classList.replace("right-full", "right-0");
    }
    resetState();
    generateQuiz();
}
function resetState() {
    if (!answers)
        return;
    for (let i = 0; i < 4; i++)
        answers[i].classList.replace("bg-blue-400", "bg-transparent");
    checkAnswerButton?.classList.replace("bg-blue-400", "bg-blue-700");
    checkAnswerButton?.classList.replace("text-white", "text-blue-600");
}
const startingAtContainer = document.getElementById("starting-at");
const startingAtButtons = startingAtContainer?.getElementsByTagName("button");
const toHome = document.getElementById("to-home");
if (startingAtButtons)
    for (let i = 0; i < 2; i++)
        startingAtButtons[i].addEventListener("click", startingAtClicked);
function startingAtClicked(e) {
    if (!startingAtButtons)
        return;
    const buttonClicked = e.target;
    for (let i = 0; i < 2; i++)
        startingAtButtons[i].classList.replace("bg-blue-400", "bg-gray-400");
    buttonClicked.classList.replace("bg-gray-400", "bg-blue-400");
    const toHomeIcon = toHome?.getElementsByTagName("i")[0];
    toHomeIcon?.classList.remove("text-gray-500");
    toHome?.setAttribute("href", "../../home.html");
}
const timer = document.getElementById("timer");
let minute = 0;
let second = 0;
setTimeout(() => { }, 2500);
const startTime = setInterval(timing, 1000);
function timing() {
    if (!timer)
        return;
    if (second == 60) {
        second = 0;
        minute++;
    }
    timer.innerText = `${minute}:${second++}`;
}
const gotoFinish = document.getElementById("goto-finish");
const finishSection = document.getElementById("finish");
gotoFinish?.addEventListener("click", finish);
function finish() {
    if (!finishSection)
        return;
    finishSection.classList.replace("left-full", "left-0");
}
