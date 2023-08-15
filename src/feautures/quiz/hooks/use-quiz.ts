import { Country, useGetCountries } from '@/feautures/countries'
import { ValidationError } from '@/utils'

import { Option, Question } from '../models'
import { useGameQuizStore, useQuizStore } from '../store'
import { generateQuestion } from '../utils'

export const useQuiz = () => {
    const { getCountries } = useGetCountries()
    const {
        setQuestions,
        setActualQuestion,
        updateActualQuestion,
        actualQuestion,
        questions,
        doneQuestions,
        addDoneQuestion,
        resetQuizState,
    } = useQuizStore((state) => state)

    const { setStatus, addPointToScore, resetGameState, resetScoreState } =
        useGameQuizStore((state) => state)

    const getQuestions = ({ countries }: { countries: Country[] }) => {
        const questions: Question[] = []

        try {
            for (let i = 0; i < 4; i++) {
                const question = generateQuestion({
                    countries,
                    type: i > 2 ? 'CAPITAL' : 'FLAG',
                })
                if (question) {
                    questions.push(question)
                }
            }
        } catch (error) {
            if (error instanceof ValidationError) {
                // llamar a generateQuestion usando data local 40 paises
            }
        }

        return questions
    }

    const initGame = async () => {
        const countries = await getCountries()
        const questions = getQuestions({ countries })
        if (questions) {
            setQuestions(questions)
            setActualQuestion(questions[0])
        }
    }

    const resetGame = async () => {
        resetGameState()
        resetQuizState()
        resetScoreState()
        initGame()
    }

    const markOption = ({ option }: { option: Option }) => {
        if (!actualQuestion) {
            return
        }
        if (option.isCorrect) {
            addPointToScore()
        }
        const optionsMarked = actualQuestion.options.map((row) => {
            if (row.ccn3 === option.ccn3) {
                row.marked = true
            }
            return row
        })
        updateActualQuestion({
            ...actualQuestion,
            state: 'RESPONDED',
            options: optionsMarked,
        })
    }

    const nextQuestion = () => {
        if (!actualQuestion) {
            return
        }

        addDoneQuestion(actualQuestion)
        let nextQuestion

        if (questions.length - 1 === doneQuestions.length) {
            setStatus('DONE')
            return
        }

        while (!nextQuestion) {
            const nextQuestionIndex = Math.floor(
                Math.random() * questions.length
            )
            const ids = doneQuestions.map((row) => row.id)

            if (!ids.includes(questions[nextQuestionIndex].id)) {
                if (actualQuestion.id === questions[nextQuestionIndex].id) {
                    continue
                }

                nextQuestion = questions[nextQuestionIndex]
            }
        }

        setActualQuestion(nextQuestion)
    }

    return {
        initGame,
        markOption,
        nextQuestion,
        resetGame,
    }
}
