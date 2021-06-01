import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QuestionsContainer from '../../components/QuestionsContainer';
import { getQuestions } from '../../store/actions/question';
import './index.css';

const Questions = () => {
    const
    dispatch = useDispatch(),
    question = useSelector(s=>s.question)

    useEffect(()=>{
        dispatch(getQuestions())
    }, [])

    return (
            !question.finished ?
            <QuestionsContainer /> :
            <div style={{fontSize: "46px", textAlign: "center"}}>
                Your Score is ({question.score} / {question.max})
            </div>
    );
}

export default Questions;