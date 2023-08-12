import { StateCreator } from 'zustand'

type GameStatus = 'IN-GAME' | 'WAITING' | 'DONE'

interface ScoreSlice {
    score: number
    updateScore: (score: number) => void
}

interface GameSlice {
    status: GameStatus
    setStatus: (status: GameStatus) => void
}

export const createScoreSlice: StateCreator<ScoreSlice> = (set) => ({
    score: 0,
    updateScore: (score: number) => set(() => ({ score })),
})

export const createGameSlice: StateCreator<GameSlice> = (set) => ({
    status: 'WAITING',
    setStatus: (status: GameStatus) => set(() => ({ status })),
})
