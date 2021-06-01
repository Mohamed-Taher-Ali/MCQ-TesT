const { randomBetween } = require('../config/helper');
const
    { respError, arrayArrangeRandomly } = require("../config/helper"),
    { Question } = require('../models/question'),
    questionsHardCoded = require("../config/questionsHardCoded.json");


exports.getQuestions = async (count = 5) => {
    let
        inds = [],
        questions = await Question.find();

    if (count < 1 || count > questions.length - 1)
        return respError("error count !");

    while (inds.length != count) {
        let newInd = randomBetween(0, questions.length - 1);

        if (!inds.includes(newInd))
            inds.push(newInd);
    }

    return inds.map(i => questions[i]);
};


exports.getQuestions = async (count = 5) => {
    let questions = await Question.find();

    if (count < 1 || count > questions.length - 1)
        return respError("error count !");

    questions = arrayArrangeRandomly(
        questions.map(q => q.toJSON())
    );

    questions = questions.slice(0, 5).map(q=>({...q,
        answers: arrayArrangeRandomly(q.answers)
    }));

    return questions;
};


//self-invoke seed questions to database :)
(async () => {
    let questionsLength = await Question.find().count();

    if (!questionsLength) {
        await Question
            .insertMany(questionsHardCoded);
    }
})();