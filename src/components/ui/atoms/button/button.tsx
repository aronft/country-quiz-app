import classNames from 'classnames'
import { ComponentProps, MouseEventHandler, ReactNode } from 'react'

import { OverrideProps } from '@/utils'

import styles from './button.module.css'

export type ButtonColor =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'thertiary'

export type ButtonType = 'outline' | 'fill'

type ButtoSizes = 'small' | 'medium' | 'large'

export type ButtonProps = OverrideProps<
    ComponentProps<'button'>,
    {
        onClick?: MouseEventHandler
    }
> & {
    children: ReactNode
    color?: ButtonColor
    variant?: ButtonType
    size?: ButtoSizes
}

export const Button = ({
    children,
    color = 'primary',
    variant = 'fill',
    size = 'medium',
    onClick,
    ...rest
}: ButtonProps) => {
    return (
        <button
            className={classNames(rest.className, styles.button, {
                [styles[`button--${color}`]]: color,
                [styles[`button--${variant}`]]: variant,
                [styles[`button--${size}`]]: size,
            })}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    )
}
