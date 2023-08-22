import classNames from 'classnames'
import { JSX, ReactNode } from 'react'

import styles from './container.module.css'

type ContainerProps = {
    tag?: keyof JSX.IntrinsicElements
    children: ReactNode
    className?: string
}

export const Container = ({
    tag: Tag = 'div',
    children,
    className,
}: ContainerProps) => {
    return (
        <Tag className={classNames(styles.container, className)}>
            {children}
        </Tag>
    )
}
