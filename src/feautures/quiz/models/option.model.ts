import { Country } from '@/feautures/countries/models'

export interface Option extends Country {
    id: string
    isCorrect: boolean
    marked: boolean
}
