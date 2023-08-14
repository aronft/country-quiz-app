import { create } from 'zustand'

import { createGameSlice, createScoreSlice, GameSlice, ScoreSlice } from '.'

export const useGameQuizStore = create<GameSlice & ScoreSlice>()((...a) => ({
    ...createGameSlice(...a),
    ...createScoreSlice(...a),
}))
