import { CSSProperties } from 'react'

import { Option, QuizOption } from '@/feautures'

import styles from './quiz-option-list.module.css'

type QuizOptionListProps = {
    style?: CSSProperties | undefined
    options: Option[]
}

export const QuizOptionList = ({ style, options }: QuizOptionListProps) => {
    return (
        <div className={styles['quiz-option-list']} style={style}>
            {options.map((option) => (
                <QuizOption key={option.ccn3} letter="A" option={option} />
            ))}
        </div>
    )
}
