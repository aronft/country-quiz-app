import classNames from 'classnames'
import { CSSProperties, JSX, ReactNode } from 'react'

import styles from './text.module.css'

type TextProps = {
    children: ReactNode
    tag: keyof JSX.IntrinsicElements
    color?: 'success-alt' | 'thertiary-alt' | 'gray' | 'thertiary'
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    style?: CSSProperties
    className?: string
}

export const Text = ({
    children,
    tag,
    color,
    size,
    style,
    className,
}: TextProps) => {
    const Tag = tag
    return (
        <Tag
            className={classNames(styles.text, className, {
                [styles[`text--${color}`]]: color,
                [styles[`text--${size}`]]: size,
            })}
            style={style}
        >
            {children}
        </Tag>
    )
}
