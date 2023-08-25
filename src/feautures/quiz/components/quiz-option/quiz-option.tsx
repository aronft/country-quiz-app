import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'

import { Button, ButtonColor, ButtonType, Text } from '@/components'

import { Option, useQuiz, useQuizStore } from '../..'

type QuizOptionProps = {
    letter: string
    option: Option
}

export const QuizOption = ({ letter, option }: QuizOptionProps) => {
    const actualQuestion = useQuizStore((state) => state.actualQuestion)
    const { markOption } = useQuiz()
    let Icon = null
    const responded = actualQuestion?.state === 'RESPONDED'
    let colorVariant: ButtonColor = 'secondary'
    let buttonVariant: ButtonType = 'outline'
    if (responded) {
        if (option.isCorrect) {
            buttonVariant = 'fill'
            colorVariant = 'success'
            Icon = <AiOutlineCheckCircle />
        }
        if (option.marked && !option.isCorrect) {
            buttonVariant = 'fill'
            colorVariant = 'error'
            Icon = <AiOutlineCloseCircle />
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
                {actualQuestion?.state === 'RESPONDED' && Icon}
            </Text>
        </Button>
    )
}
