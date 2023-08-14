import { StateCreator } from 'zustand'

import { Question } from '../models'
/* 
       quizState: {
            questions: []
            currentQuestion: {
                type: 'country' | 'capital'
                options: []
                state: 'waiting' | 'responded'
                optionIdSelecetd: null | string
            }
            doneQuestions: []
        }
*/
export interface QuizSlice {
    questions: Question[]
    actualQuestion: Question | undefined
    doneQuestions: Question[]
    setQuestions: (questions: Question[]) => void
    setActualQuestion: (question: Question) => void
}

export const createQuizSlice: StateCreator<QuizSlice> = (set) => ({
    questions: [],
    actualQuestion: undefined,
    doneQuestions: [],
    setQuestions: (questions: Question[]) => set(() => ({ questions })),
    setActualQuestion: (question: Question) =>
        set(() => ({ actualQuestion: question })),
    // next  button
    // nextQuestion: () => {
    // saveDoneQuestion=
    // ----
    // markOPtion,
    // updateActualQuestion // change state
})
