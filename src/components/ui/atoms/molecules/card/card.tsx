import { ReactNode } from 'react'

import styles from './card.module.css'

type CardProps = {
    children: ReactNode
}

export const Card = ({ children }: CardProps) => {
    return (
        <div className={styles.card}>
            <div className="card__content">{children}</div>
        </div>
    )
}
