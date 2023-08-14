import { Capital } from '.'

export interface Country {
    name: string
    ccn3: string // ccn3
    capital: Capital | undefined
    flag: string // flags
}
