import React, { useState } from 'react'
import { fetchQuizQuestions, QuestionState } from './API'
import QuestionCard from './Components/QuestionCard'
import { GlobalStyle, Wrapper } from './App.styles'
import QuizSettings from './Components/QuizSettings'

export type AnswerObject = {
    question: string
    answer: string
    correct: boolean
    correctAnswer: string
}

const VersionTwo = () => {
    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState<QuestionState[]>([])
    const [number, setNumber] = useState(0)
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
    const [score, setScore] = useState(0)
    const [gameOver, setGameOver] = useState(true)
    const [category, setCategory] = useState(0)
    const [difficulty, setDifficulty] = useState('easy')
    const [numQuestions, setNumQuestions] = useState(3)

    const startTrivia = async () => {
        setLoading(true)
        setGameOver(false)

        const newQuestions = await fetchQuizQuestions(
            numQuestions,
            difficulty,
            category
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
        if (number === numQuestions - 1) {
            setGameOver(true)
        }
        console.log('GAME OVER: ', gameOver)
    }

    const nextQuestion = () => {
        if (number + 1 === numQuestions) {
            setGameOver(true)
        } else {
            setNumber(number + 1)
        }
    }

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <h1>General Knowledge Quiz V2</h1>
                <h3>
                    Build with React & TS by{' '}
                    <a href="mailto:abifranklin@gmail.com"> Abi Franklin </a>
                </h3>

                {!gameOver || number === numQuestions - 1 ? (
                    <p className="score">
                        Score: {score}/{numQuestions}{' '}
                    </p>
                ) : null}
                {gameOver && number === numQuestions - 1 ? (
                    <>
                        <h1>Game Over</h1>
                        <QuizSettings
                            setNumQuestions={setNumQuestions}
                            setCategory={setCategory}
                            setDifficulty={setDifficulty}
                        />
                        <button className="start" onClick={startTrivia}>
                            Start Quiz
                        </button>
                    </>
                ) : null}
                {userAnswers.length === 0 && questions.length === 0 ? (
                    <>
                        <QuizSettings
                            setNumQuestions={setNumQuestions}
                            setCategory={setCategory}
                            setDifficulty={setDifficulty}
                        />
                        <button className="start" onClick={startTrivia}>
                            Start Quiz
                        </button>
                    </>
                ) : null}
                {loading && <p>Loading Questions ...</p>}
                {!loading && questions.length !== 0 && (
                    <QuestionCard
                        questionNum={number + 1}
                        totalQuestions={numQuestions}
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
                number !== numQuestions - 1 ? (
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

export default VersionTwo
