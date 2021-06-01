import {question} from "../types";
import {question as qAPI} from "../../apis";



export const getQuestions = () => {
    return async (dispatch) => {
        let questions = await qAPI.getQuestions();

        dispatch({
            payload: questions.data,
            type: question.GET_QUESTIONS
        });
    }
}


export const nextQuestionIndex = (val) => ({
    payload: val,
    type: question.CURRENT_QUESTION_INDEX
})


export const increaseScore = (val) => ({
    payload: val,
    type: question.SCORE
})


export const finish = (val) => ({
    payload: val,
    type: question.FINISHED
})