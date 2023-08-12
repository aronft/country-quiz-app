import { StateCreator } from 'zustand'

export interface QuizSlice {
    questions: []
}

export const createQuizSlice: StateCreator<QuizSlice> = (set) => ({
    questions: [],
})
