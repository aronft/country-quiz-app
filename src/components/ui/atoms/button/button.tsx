import classNames from 'classnames'
import { MouseEventHandler, ReactNode } from 'react'

import styles from './button.module.css'

type ButtonColors = 'primary' | 'secondary' | 'success' | 'error' | 'thertiary'

type ButtonTypes = 'outline' | 'fill'

type ButtoSizes = 'small' | 'medium' | 'large'

type ButtonProps = {
    children: ReactNode
    color?: ButtonColors
    type?: ButtonTypes
    size?: ButtoSizes
    onClick?: MouseEventHandler
}

export const Button = ({
    children,
    color = 'primary',
    type = 'fill',
    size = 'medium',
    onClick,
}: ButtonProps) => {
    return (
        <button
            className={classNames(styles.button, {
                [styles[`button--${color}`]]: color,
                [styles[`button--${type}`]]: type,
                [styles[`button--${size}`]]: size,
            })}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
