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
    } = useQuizStore((state) => state)

    const { setStatus } = useGameQuizStore((state) => state)

    const getQuestions = ({ countries }: { countries: Country[] }) => {
        const questions: Question[] = []

        try {
            for (let i = 0; i < 3; i++) {
                const question = generateQuestion({
                    countries,
                    type: 'CAPITAL',
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

    const markOption = ({ option }: { option: Option }) => {
        if (!actualQuestion) {
            return
        }
        if (option.isCorrect) {
            // add point
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
        while (!nextQuestion) {
            const nextQuestionIndex = Math.floor(
                Math.random() * questions.length
            )
            const ids = doneQuestions.map((row) => row.id)
            if (!ids.includes(questions[nextQuestionIndex].id)) {
                nextQuestion = questions[nextQuestionIndex]
            }
        }
        setActualQuestion(nextQuestion)
        console.log(questions, doneQuestions)
        if (questions.length - 1 === doneQuestions.length) {
            setStatus('DONE')
        }
    }

    return {
        initGame,
        markOption,
        nextQuestion,
    }
}
