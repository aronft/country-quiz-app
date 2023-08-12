import { create } from 'zustand'

import { createQuizSlice, QuizSlice } from '.'

export const useQuizStore = create<QuizSlice>()((...a) => ({
    ...createQuizSlice(...a),
}))
