const config = import.meta.env

interface ImportMetaEnv {
    readonly countryApi: string
}

export const configEnv = (): ImportMetaEnv => {
    return {
        countryApi: config.VITE_COUNTRY_API,
    }
}
