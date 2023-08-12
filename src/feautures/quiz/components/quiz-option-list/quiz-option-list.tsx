import { CSSProperties } from 'react'

import { QuizOption } from '@/feautures'

import styles from './quiz-option-list.module.css'

type QuizOptionListProps = {
    style?: CSSProperties | undefined
}

export const QuizOptionList = ({ style }: QuizOptionListProps) => {
    return (
        <div className={styles['quiz-option-list']} style={style}>
            <QuizOption
                letter="A"
                name="Vietnam"
                marked={false}
                correct={false}
            />
            <QuizOption
                letter="A"
                name="Vietnam"
                marked={false}
                correct={false}
            />
            <QuizOption
                letter="A"
                name="Vietnam"
                marked={true}
                correct={false}
            />
            <QuizOption
                letter="A"
                name="Vietnam"
                marked={true}
                correct={true}
            />
        </div>
    )
}
