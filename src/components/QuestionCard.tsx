import React from "react";
import { AnswerObject } from "../App";
import { Wrapper, ButtonWrapper } from "../components/QuestionCard.styles"

type CardProps = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<CardProps> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return <Wrapper>
    <p>Question: { questionNr} / {totalQuestions} </p>

    <p dangerouslySetInnerHTML={{ __html: question}} />
    <div>
    {
        answers.map(answer => (
            <ButtonWrapper  
            key={answer} 
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
            >
                <button disabled={!!userAnswer} value={answer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{__html: answer}}/>
                </button>
            </ButtonWrapper>
        ))
    }
    </div>
  </Wrapper>;
};

export default QuestionCard;
