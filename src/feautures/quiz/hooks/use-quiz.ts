import { count } from 'console'
import { useEffect } from 'react'

import { Country, useGetCountries } from '@/feautures/countries'

import { Question } from '../models'
import { useQuizStore } from '../store'
import { generateQuestion } from '../utils'

export const useQuiz = () => {
    const { getCountries } = useGetCountries()
    const { setQuestions, setActualQuestion } = useQuizStore((state) => state)

    const getQuestions = ({ countries }: { countries: Country[] }) => {
        if (countries.length === 0) {
            return
        }

        const questions: Question[] = []

        for (let i = 0; i < 3; i++) {
            const question = generateQuestion({ countries, type: 'CAPITAL' })
            if (question) {
                questions.push(question)
            }
        }

        return questions
    }

    const initGame = async () => {
        const countries = await getCountries()
        const questions = getQuestions({ countries })
        console.log(questions)
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
