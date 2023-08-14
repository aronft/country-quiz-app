import { useEffect } from 'react'

import { Country, useGetCountries } from '@/feautures/countries'
import { ValidationError } from '@/utils'

import { Question } from '../models'
import { useQuizStore } from '../store'
import { generateQuestion } from '../utils'

export const useQuiz = () => {
    const { getCountries } = useGetCountries()
    const { setQuestions, setActualQuestion } = useQuizStore((state) => state)

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

    useEffect(() => {
        initGame()
    }, [])

    return {
        // initGame,
    }
}
