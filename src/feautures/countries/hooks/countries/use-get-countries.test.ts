import { getCountriesAPI } from '../../api/countries-api/get-countries-api'
import { useGetCountries } from './use-get-countries'

const mockedData = [
    {
        ccn3: '543',
        name: {
            common: 'Peru',
        },
        flags: {
            png: 'https://',
        },
    },
]
jest.mock('../../api/countries-api/get-countries-api', () => {
    return {
        getCountriesAPI: jest.fn(() => mockedData),
    }
})
describe('useGetCountries ', () => {
    getCountriesAPI as jest.Mock

    test('should call getCountriesAPI function with the given data', async () => {
        const { getCountries } = useGetCountries()
        const data = await getCountries()
        expect(data).toEqual(mockedData)
        ;(getCountriesAPI as jest.Mock).mockReset()
    })
})
