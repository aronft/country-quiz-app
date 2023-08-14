import { Capital, Country } from '@/feautures/countries/models'
import { configEnv } from '@/utils'

const env = configEnv()
export const getCountriesAPI = async () => {
    try {
        const response = await fetch(`${env.countryApi}/all`)
        const data = await response.json()
        const countries: Country[] = data.map((item: any) => {
            const country: Country = {
                name: item?.name?.common,
                ccn3: item.ccn3,
                capital:
                    'capital' in item
                        ? { id: crypto.randomUUID(), name: item.capital[0] }
                        : undefined,
                flag: item.flags.png,
            }
            return country
        })
        return countries
    } catch (error) {
        throw new Error(error)
    }
}
