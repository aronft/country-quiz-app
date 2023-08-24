import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import { COUNTRIES_DATA } from '@/constants'

import { generateQuestion } from '../..'
import { Quiz } from './quiz'

describe('Quiz ', () => {
    test('should render one question of type FLAG', () => {
        const countries = COUNTRIES_DATA
        const actualQuestion = generateQuestion({ countries, type: 'FLAG' })
        if (!actualQuestion) {
            throw new Error('questions not found')
        }
        render(
            <Quiz
                totalOfQuestions={3}
                totalQuestionResponded={1}
                actualQuestion={actualQuestion}
            />
        )

        const subtitle = screen.getByRole('heading', {
            level: 2,
            name: /Which country does this flag belong to?/i,
        })

        expect(subtitle).toBeInTheDocument()
    })

    test('should render 4 options', () => {
        const countries = COUNTRIES_DATA
        const actualQuestion = generateQuestion({ countries, type: 'FLAG' })
        if (!actualQuestion) {
            throw new Error('questions not found')
        }
        render(
            <Quiz
                totalOfQuestions={3}
                totalQuestionResponded={1}
                actualQuestion={actualQuestion}
            />
        )
        const buttons = screen.getAllByRole('button')

        expect(buttons.length).toBe(4)
    })
})
