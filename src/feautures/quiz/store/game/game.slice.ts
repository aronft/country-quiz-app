import { StateCreator } from 'zustand'

export type GameStatus = 'IN-GAME' | 'WAITING' | 'DONE'

export interface ScoreSlice {
    score: number
    updateScore: (score: number) => void
    addPointToScore: () => void
    resetScoreState: () => void
}

export interface GameSlice {
    status: GameStatus
    setStatus: (status: GameStatus) => void
    resetGameState: () => void
}

export const createScoreSlice: StateCreator<ScoreSlice> = (set) => ({
    score: 0,
    updateScore: (score: number) => set(() => ({ score })),
    addPointToScore: () =>
        set((state) => ({
            score: state.score + 1,
        })),
    resetScoreState: () => set(() => ({ score: 0 })),
})

export const createGameSlice: StateCreator<GameSlice> = (set) => ({
    status: 'WAITING',
    setStatus: (status: GameStatus) => set(() => ({ status })),
    resetGameState: () => set(() => ({ status: 'WAITING' })),
})
