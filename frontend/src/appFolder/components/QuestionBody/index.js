import { Button } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {question as qAction, user as uAction} from "../../store/actions"


const QuestionBody = (q) => {
    
    return (
        <div className="q-body">
            <div className="q-txt">
                {q.question}
            </div>
            <div style={{width: "80%", marginTop: "5%"}}>
                <div className="btn-row">
                    <Answer slide={q.slide} answer={q.answers[0]} />
                    <Answer slide={q.slide} answer={q.answers[1]} />
                </div>
                <div className="btn-row">
                    <Answer slide={q.slide} answer={q.answers[2]} />
                    <Answer slide={q.slide} answer={q.answers[3]} />
                </div>
            </div>
        </div>
    )
}


let Answer = ({ answer, slide }) => {
    let
    dispatch = useDispatch(),
    question = useSelector(s=>s.question)

    let onAnswer = () => {
        if(question.currentQuestionIndex == 4){
            dispatch(qAction.finish())
            dispatch(uAction.saveUser())
        }

        if (answer.correct)
            dispatch(qAction.increaseScore())

        dispatch(qAction.nextQuestionIndex())
        slide();
    }

    return (
        <Button
            className="ans-btn"
            onClick={onAnswer}
        >{answer.answer}
        </Button>
    )
}



export default QuestionBody;