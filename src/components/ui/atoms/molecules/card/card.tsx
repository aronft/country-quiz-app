import * as classes from 'classnames'
import { ReactNode } from 'react'

import styles from './card.module.css'

type CardProps = {
    children: ReactNode
    className?: string
}

export const Card = ({ children, className }: CardProps) => {
    return (
        <div className={classes(styles.card, className)}>
            <div className="card__content">{children}</div>
        </div>
    )
}
