import { AiOutlineCheckCircle } from 'react-icons/ai'

import { Button, ButtonColor, ButtonType, Text } from '@/components'

type QuizOptionProps = {
    letter: string
    name: string
    icon?: any
    correct: boolean
    marked: boolean
}

export const QuizOption = ({
    letter,
    name,
    icon,
    correct,
    marked,
}: QuizOptionProps) => {
    // obtener el estado de la pregunta 'waiting' | 'responded'
    const responded = true
    let colorVariant: ButtonColor = 'secondary'
    let buttonVariant: ButtonType = 'outline'
    if (responded) {
        if (correct) {
            buttonVariant = 'fill'
            colorVariant = 'success'
        }
        if (marked && !correct) {
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
        >
            <Text tag="span" style={{ textTransform: 'uppercase' }}>
                {letter}
            </Text>
            <Text tag="span">{name}</Text>
            <Text tag="span">
                <AiOutlineCheckCircle />
            </Text>
        </Button>
    )
}
