import { Country } from '@/feautures/countries'
import { ValidationError } from '@/utils'

import { Option, Question, QuestionType } from '../models'
import { getQuestionTitel } from './get-question-title'

interface GenerateQuestion {
    countries: Country[]
    type: QuestionType
}

export const generateQuestion = ({
    countries,
    type,
}: GenerateQuestion): Question | undefined => {
    if (countries.length === 0) {
        throw new ValidationError('the countries array is empty')
    }
    const options: Option[] = []
    const countryOptionSelectedIndex = Math.floor(
        Math.random() * countries.length
    )

    const option: Option = {
        ...countries[countryOptionSelectedIndex],
        id: crypto.randomUUID(),
        isCorrect: true,
        marked: false,
    }

    options.push(option)

    while (options.length < 4) {
        const indexCountry = Math.floor(Math.random() * countries.length)
        if (indexCountry !== countryOptionSelectedIndex) {
            options.push({
                ...countries[indexCountry],
                isCorrect: false,
                marked: false,
                id: crypto.randomUUID(),
            })
        }
    }

    const questionGenerator = getQuestionTitel(type)
    if (!questionGenerator) {
        return undefined
    }
    const question =
        type === 'CAPITAL'
            ? questionGenerator(
                  option.capital === undefined ? '' : option.capital.name
              )
            : questionGenerator(option.name)

    return {
        id: crypto.randomUUID(),
        question,
        type,
        options,
        optionSelected: option,
        state: 'PENDING',
    } as Question
}
