import { StateCreator } from 'zustand'

import { Question } from '../models'

export interface QuizSlice {
    questions: Question[]
    actualQuestion: Question | undefined
    setQuestions: (questions: Question[]) => void
    setActualQuestion: (question: Question) => void
}

export const createQuizSlice: StateCreator<QuizSlice> = (set) => ({
    questions: [],
    actualQuestion: undefined,
    setQuestions: (questions: Question[]) => set(() => ({ questions })),
    setActualQuestion: (question: Question) =>
        set(() => ({ actualQuestion: question })),
})
