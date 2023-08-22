import { JSX, ReactNode } from 'react'
import { Link as RLink, To } from 'react-router-dom'

import styles from './link.module.css'

type LinkProps = {
    to: To
    children: ReactNode
    icon?: JSX.Element
}

export const Link = ({ to, children, icon }: LinkProps) => {
    return (
        <RLink to={to} className={styles.link}>
            {children} {icon}
        </RLink>
    )
}
