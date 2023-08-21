import { getCountriesAPI } from '../../api/countries-api/get-countries-api'
import { useGetCountries } from './use-get-countries'

jest.mock('../../api/countries-api/get-countries-api')
describe('useGetCountries ', () => {
    test('should call getCountriesAPI function with the given data', async () => {
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
        ;(getCountriesAPI as jest.Mock).mockReturnValue(mockedData)
        const { getCountries } = useGetCountries()
        const data = await getCountries()

        expect(data).toEqual(mockedData)
    })
})
