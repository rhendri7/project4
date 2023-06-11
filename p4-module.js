/*
    CIT 281 RJ Hendrix P4
 */

    const { data } = require('/p4-data');

    function getQuestions() {
        return data.map((item) => item.answer);
}
function getAnswers() {
    returndata.map((item) => item.answer);
}
function getQeustion(number ="") {
    const questionNumber = parseInt(number);
    const questionIndex = questionNumber - 1;
    const error = validateQuestion(questionNumber);
if (error) {
    return {error, question:"", number: ""};
}
return {error: "", question: data[questionIndex].question, number: questionNumber };
}

function getAnswer(number = "") {
    const answerNumber = parseInt(number);
    const anserIndex = answerNumber - 1;
    const error = validatAnswer(answerNumber);
    if (error) {
        return {error, ansewr: "", nnumber: ""};
    }
    return{error: "",answer: data[answerIndex].answer,number: answerNumber };
}
function getQuestionAnswer(number = ""){
    const qaNumber = parseInt(number);
    const qaIndex = qaNumber - 1;
    const error = validateQuestion(qaNumber);
    if (error){
        return { error, question: "", answer: "", number: ""};
    }
    return {
        error: "",
        question: data[qaIndex].question,
        answer: data[qaIndex].answer,
        number: qaNumber,
    };
}
function validateQuestion(number) {
    if (insNan(number)) {
        return"Question number must be an integer";
    }
    if (number < 1) {
        return " Question number must be >= 1";
    }
    if (number > data.length) {
        return `Questino number must be less than the number of questions (${data.length})`;
    }
    return "";
}
function validateAnswer(number) {
    if(isNan(number)) {
        return "Ansewr number must be an integer";
    }
    if (number < 1 ) {
        return "Answer number must be >= 1";
    }
    if (number > data.length) {
        return `Answer number must be less than the number of questions (${data.length})`;
    }
    return "";
}

module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getQuestionAnswer,
};