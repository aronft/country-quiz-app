import { CSSProperties } from 'react'

import { Option, QuizOption } from '@/feautures'
import { getLetterFromNumber } from '@/utils'

import styles from './quiz-option-list.module.css'

type QuizOptionListProps = {
    style?: CSSProperties | undefined
    options: Option[]
}

export const QuizOptionList = ({ style, options }: QuizOptionListProps) => {
    return (
        <div className={styles['quiz-option-list']} style={style}>
            {options.map((option, index) => (
                <QuizOption
                    key={option.id}
                    letter={getLetterFromNumber(index)}
                    option={option}
                />
            ))}
        </div>
    )
}
