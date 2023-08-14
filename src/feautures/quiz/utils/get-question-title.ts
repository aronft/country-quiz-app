import { QuestionType } from '../models'

export const getQuestionTitel = (type: QuestionType) => {
    if (type === 'CAPITAL') {
        return (name: string) => `${name} is the capital of`
    }

    if (type === 'FLAG') {
        return () => 'Which country does this flag belong to?'
    }
}
