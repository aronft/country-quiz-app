import { Option } from '.'

export type QuestionType = 'FLAG' | 'CAPITAL'

export interface Question {
    id: string
    type: QuestionType
    question: string
    options: Option[]
    optionSelected: Option
    state: 'PENDING' | 'RESPONDED'
}
