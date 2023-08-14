import { Country, getCountriesAPI } from '../..'

export const useGetCountries = () => {
    const getCountries = async (): Promise<Country[]> => {
        const dataLocalStorage = localStorage.getItem('countries')
        if (!dataLocalStorage) {
            const data = await getCountriesAPI()
            localStorage.setItem('countries', JSON.stringify(data))
            return data
        }

        const data = JSON.parse(dataLocalStorage)
        return data
    }

    return {
        getCountries,
    }
}
