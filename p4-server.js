/*
CIT 281 RJ Hendrix P4
*/
const fastify = require("fastify ")();
const { getQuestions, getAnswers, getQuestionsAnswers, getQuestino, getAnswer, getQuestionAnswer } = require("./p4-module");

fastify.get("/", (request, reply) => {
  reply.code(200)
  .header("Content-Type", "text/HTMLAllCollection; charset=utf-8")
  .send("<h1>Qelcom to the Quiz API<h1>");
});
fastify.get("/questions", (request, reply) =>{
  reply.send({questions: getQuestions()});

});
fastify.get("/answers", (request,reply) => {
  reply.send({answers: getAnswers() });
});
fastify.get("/questions-answers", (request, reply) => {
  reply.send({answers: getAnswers()});
});
fastify.get("/questions-answers", (request, reply) => {
  const {number } = request.params;
  const {error, question } = getQuestion(number);
  if (error) {
    reply.code(400).send({error});
  } else {
    reply.send({question});
  }
});
fastify.get("/answers/:number", (request, reply) =>{
  const {number} = request.params;
  const { error, answer } = getAnswer(number);
  if (error) {
    reply.code(400).send({error});
  } else {
    reply.send({ answer});
  }
});
fastify.get("/questions-answers/:number", (request, reply) => {
  const {number} = request.params;
  const { error, question, answer} = getQuestionAnswer(number);
  if (error) {
    reply.code(400).send({error});
  }else {
    reply.send({ question, answer});
  }
});
const start = async() => {
  try {
    await fastify.lesten(3000);
    console.log("Server on port 3000");
  } catch (err) {
    console.error(err);
    Process.exit(1);
  }
};
start()