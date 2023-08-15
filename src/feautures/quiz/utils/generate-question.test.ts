import { COUNTRIES_DATA } from '@/__tests__/constants'
import { Country } from '@/feautures/countries'
import { ValidationError } from '@/utils/errors'

import { generateQuestion } from '.'

const countries: Country[] = [
    {
        ccn3: 'AFG',
        flag: 'https://',
        name: 'Afghanistan',
        capital: {
            id: crypto.randomUUID(),
            name: 'Paris',
        },
    },
]

const countriesWithoutCapital = COUNTRIES_DATA.filter(
    (country) => country.capital === undefined
)

describe('generateQuestion ', () => {
    test('should return an error if the numberOption is grather than total countries', () => {
        const messageError =
            'The numberOptions be grather than countries length'
        let messageExpected = ''
        try {
            generateQuestion({
                countries,
                type: 'CAPITAL',
                numberOptions: 4,
            })
        } catch (error) {
            if (error instanceof ValidationError) {
                messageExpected = error.message
            }
        }
        expect(messageError).toBe(messageExpected)
    })

    test('should return a question with valid countries and type of question', () => {
        const numberOptions = 4
        const question = generateQuestion({
            countries: COUNTRIES_DATA,
            type: 'CAPITAL',
            numberOptions,
        })

        expect(question).not.toBeUndefined()
    })

    test('should options does not have capital undefined if type question is CAPITAL', () => {
        const question = generateQuestion({
            countries: COUNTRIES_DATA,
            type: 'CAPITAL',
            numberOptions: 4,
        })
        if (!question) {
            return
        }

        question.options.forEach((option) => {
            expect(option.capital).not.toBeUndefined()
        })
    })
})
