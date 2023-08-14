import { StateCreator } from 'zustand'

import { Question } from '../../models'
export interface QuizSlice {
    questions: Question[]
    actualQuestion: Question | undefined
    doneQuestions: Question[]
    setQuestions: (questions: Question[]) => void
    setActualQuestion: (question: Question) => void
    updateActualQuestion: (actualQuestion: Question) => void
    addDoneQuestion: (question: Question) => void
    resetQuizState: () => void
}

export const createQuizSlice: StateCreator<QuizSlice> = (set) => ({
    questions: [],
    actualQuestion: undefined,
    doneQuestions: [],
    setQuestions: (questions: Question[]) => set(() => ({ questions })),
    setActualQuestion: (question: Question) =>
        set(() => ({ actualQuestion: question })),
    updateActualQuestion: (actualQuestion: Question) =>
        set(() => ({ actualQuestion })),
    addDoneQuestion: (question: Question) =>
        set((state) => ({
            doneQuestions: [...state.doneQuestions, question],
        })),
    resetQuizState: () =>
        set(() => ({
            questions: [],
            actualQuestion: undefined,
            doneQuestions: [],
        })),
})
