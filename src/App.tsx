import React, { useState } from 'react'
import { fetchQuizQuestions, Difficulty, QuestionState } from './API'
import QuestionCard from './Components/QuestionCard'
import { GlobalStyle, Wrapper } from './App.styles'

export type AnswerObject = {
    question: string
    answer: string
    correct: boolean
    correctAnswer: string
}

const TOTAL_QUESTIONS = 3

const App = () => {
    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState<QuestionState[]>([])
    const [number, setNumber] = useState(0)
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
    const [score, setScore] = useState(0)
    const [gameOver, setGameOver] = useState(true)

    const startTrivia = async () => {
        setLoading(true)
        setGameOver(false)

        const newQuestions = await fetchQuizQuestions(
            TOTAL_QUESTIONS,
            Difficulty.EASY
        )

        setQuestions(newQuestions)
        setScore(0)
        setUserAnswers([])
        setNumber(0)
        setLoading(false)
    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!gameOver) {
            const answer = e.currentTarget.value
            const correct = questions[number].correct_answer === answer
            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer,
            }
            if (correct) {
                setScore((prev) => prev + 1)
                setUserAnswers((prev) => [...prev, answerObject])
            } else {
                setUserAnswers((prev) => [...prev, answerObject])
            }
        }
    }

    const nextQuestion = () => {
        if (number + 1 === TOTAL_QUESTIONS) {
            setGameOver(true)
        } else {
            setNumber(number + 1)
        }
    }

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <h1>General Knowledge Quiz</h1>
                <h3>
                    Build with React & TS by{' '}
                    <a href="mailto:abifranklin@gmail.com"> Abi Franklin </a>
                </h3>
                {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                    <button className="start" onClick={startTrivia}>
                        Start Quiz
                    </button>
                ) : null}
                {!gameOver ? (
                    <p className="score">
                        Score: {score}/{TOTAL_QUESTIONS}{' '}
                    </p>
                ) : null}
                {loading && <p>Loading Questions ...</p>}
                {!loading && !gameOver && (
                    <QuestionCard
                        questionNum={number + 1}
                        totalQuestions={TOTAL_QUESTIONS}
                        question={questions[number].question}
                        answers={questions[number].answers}
                        userAnswer={
                            userAnswers ? userAnswers[number] : undefined
                        }
                        callback={checkAnswer}
                    />
                )}
                {!gameOver &&
                !loading &&
                userAnswers.length === number + 1 &&
                number !== TOTAL_QUESTIONS - 1 ? (
                    <button className="next" onClick={nextQuestion}>
                        Next Question
                    </button>
                ) : null}
                <br />
                <span className="footer">
                    Background by{' '}
                    <a href="https://unsplash.com/@pawel_czerwinski?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                        Paweł Czerwiński
                    </a>{' '}
                    on{' '}
                    <a href="https://unsplash.com/t/textures-patterns?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                        Unsplash
                    </a>
                </span>
            </Wrapper>
        </>
    )
}

export default App
