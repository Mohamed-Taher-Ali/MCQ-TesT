import {question} from "../types"

const initState = {
    questions: [],
    currentQuestionIndex: 0,
    finished: false,
    score: 0,
    max: 5
}

export default (state=initState, action) => {
    switch (action.type) {
        case question.GET_QUESTIONS: {
            return {
                ...state,
                questions: action.payload
            };
        }
        case question.CURRENT_QUESTION_INDEX: {
            return {
                ...state,
                currentQuestionIndex:
                state.currentQuestionIndex + (action.payload || 1)
            };
        }
        case question.SCORE: {
            return {
                ...state,
                score: state.score + (action.payload || 1)
            };
        }
        case question.FINISHED: {
            return {
                ...state,
                finished: true
            };
        }
        default: return state;
    }
}