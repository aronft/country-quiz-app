import { AiOutlinePartition } from 'react-icons/ai'

import { Country } from '@/feautures/countries'

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
        return undefined
    }
    const options: Option[] = []
    const countryOptionSelectedIndex = Math.floor(
        Math.random() * countries.length
    )

    const option: Option = {
        ...countries[countryOptionSelectedIndex],
        isCorrect: true,
    }

    options.push(option)

    while (options.length < 4) {
        const indexCountry = Math.floor(Math.random() * countries.length)
        if (indexCountry !== countryOptionSelectedIndex) {
            options.push({
                ...countries[indexCountry],
                isCorrect: false,
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
    } as Question
}
