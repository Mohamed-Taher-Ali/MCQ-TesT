import React, { useRef } from "react";
import { Carousel } from "antd";
import { useSelector } from "react-redux";
import QuestionBody from "../QuestionBody";


const QuestionsContainer = ({ }) => {
    const 
    carouselRef = useRef(),
    question = useSelector(s => s.question);

    return (
        <Carousel
        ref={carouselRef}
        dotPosition="left" style={{ height: "350px" }}
        >
            {question.questions.map((q, i) => (
                <QuestionBody
                key={i}
                {...q}
                slide={carouselRef.current.next}
                />
            ))}
        </Carousel>
    );
}

export default QuestionsContainer;