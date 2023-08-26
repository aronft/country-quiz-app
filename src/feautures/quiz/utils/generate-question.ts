import { Country } from '@/feautures/countries/models'
import { ValidationError } from '@/utils/errors'

import { Option, Question, QuestionType } from '../models'
import { getQuestionTitle } from './get-question-title'

interface GenerateQuestion {
    countries: Country[]
    type: QuestionType
    numberOptions?: number
}

export const generateQuestion = ({
    countries,
    type,
    numberOptions = 4,
}: GenerateQuestion) => {
    if (countries.length === 0) {
        throw new ValidationError('the countries array is empty')
    }

    if (countries.length < numberOptions) {
        throw new ValidationError(
            'The numberOptions be grather than countries length'
        )
    }
    let options: Option[] = []
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

    let flag = 0
    while (options.length < numberOptions) {
        flag += 1
        if (flag > 100) {
            break
        }
        const indexCountry = Math.floor(Math.random() * countries.length)
        if (
            countries[indexCountry].capital === undefined &&
            type === 'CAPITAL'
        ) {
            continue
        }

        if (countries[indexCountry].flag === undefined && type === 'FLAG') {
            continue
        }
        if (indexCountry !== countryOptionSelectedIndex) {
            options.push({
                ...countries[indexCountry],
                isCorrect: false,
                marked: false,
                id: crypto.randomUUID(),
            })
        }
    }

    const questionGenerator = getQuestionTitle(type)
    if (!questionGenerator) {
        return undefined
    }
    const question =
        type === 'CAPITAL'
            ? questionGenerator(
                  option.capital === undefined ? '' : option.capital.name
              )
            : questionGenerator(option.name)

    options = options.sort(() => Math.random() - 0.5)

    return {
        id: crypto.randomUUID(),
        question,
        type,
        options,
        optionSelected: option,
        state: 'PENDING',
    } as Question
}
