import { AiOutlineCheckCircle } from 'react-icons/ai'

import { Button, ButtonColor, ButtonType, Text } from '@/components'

import { Option, useQuiz, useQuizStore } from '../..'

type QuizOptionProps = {
    letter: string
    option: Option
}

export const QuizOption = ({ letter, option }: QuizOptionProps) => {
    // obtener el estado de la pregunta 'waiting' | 'responded'
    const actualQuestion = useQuizStore((state) => state.actualQuestion)
    const { markOption } = useQuiz()

    const responded = actualQuestion?.state === 'RESPONDED'
    let colorVariant: ButtonColor = 'secondary'
    let buttonVariant: ButtonType = 'outline'
    if (responded) {
        if (option.isCorrect) {
            buttonVariant = 'fill'
            colorVariant = 'success'
        }
        if (option.marked && !option.isCorrect) {
            buttonVariant = 'fill'
            colorVariant = 'error'
        }
    }
    return (
        <Button
            color={colorVariant}
            variant={buttonVariant}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
            onClick={() => {
                if (actualQuestion?.state === 'RESPONDED') {
                    return
                }
                markOption({ option })
            }}
        >
            <Text tag="span" style={{ textTransform: 'uppercase' }}>
                {letter}
            </Text>
            <Text tag="span">{option.name}</Text>
            <Text tag="span">
                <AiOutlineCheckCircle />
            </Text>
        </Button>
    )
}
