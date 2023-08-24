import { Capital } from '.'

export interface Country {
    name: string
    ccn3: string
    capital: Capital | undefined
    flag: string
}
