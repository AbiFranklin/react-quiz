import React from 'react'
import { Wrapper } from './QuestionCard.styles'

const Categories = [
    'General Knowledge',
    'Books',
    'Film',
    'Music',
    'Musicals & Theater',
    'Television',
    'Video Games',
    'Board Games',
    'Science & Nature',
    'Computers',
    'Mathematics',
    'Mythology',
    'Sports',
    'Geography',
    'History',
    'Poltics',
    'Art',
    'Celebrities',
    'Animals',
    'Vehicles',
    'Comics',
    'Gadgets',
    'Anime & Manga',
    'Cartoons',
]

const Difficulty = ['Easy', 'Medium', 'Hard']

type Props = {
    setNumQuestions: any
    setCategory: any
    setDifficulty: any
}

const QuizSettings: React.FC<Props> = ({
    setNumQuestions,
    setCategory,
    setDifficulty,
}) => {
    return (
        <Wrapper>
            <h2>Quiz Settings</h2>
            <form>
                <label>Number of Questions: </label>
                <input
                    type="text"
                    id="questionNum"
                    name="questionNum"
                    onChange={(e) => setNumQuestions(e.currentTarget.value)}
                />
                <br />
                <label>Categories (select one): </label>
                <select
                    id="category"
                    name="category"
                    onChange={(e) => setCategory(e.currentTarget.value)}
                >
                    {Categories.map((category, index) => (
                        <>
                            <option value={index + 9}>{category}</option>
                        </>
                    ))}
                </select>
                <br />
                <label>Difficulty: </label>
                {Difficulty.map((diff) => (
                    <>
                        <input
                            type="radio"
                            id={diff}
                            name="diffuculty"
                            value={diff.toLowerCase()}
                            onChange={(e) =>
                                setDifficulty(e.currentTarget.value)
                            }
                        />
                        <label>{diff}</label>{' '}
                    </>
                ))}
            </form>
        </Wrapper>
    )
}

export default QuizSettings
