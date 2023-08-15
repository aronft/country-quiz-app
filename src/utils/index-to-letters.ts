type Letters = {
    [index: number]: string
}

const indexToLetters: Letters = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
}

export const getLetterFromNumber = (number: number) => {
    const letter = indexToLetters[number]
    if (!letter) {
        return 'A'
    }
    return letter
}
