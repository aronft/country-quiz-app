import { create } from 'zustand'

import { createGameSlice, GameSlice } from '.'

export const useGameQuizStore = create<GameSlice>()((...a) => ({
    ...createGameSlice(...a),
}))
