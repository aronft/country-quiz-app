import { Outlet } from 'react-router-dom'

import styles from './layout.module.css'
export const Layout = () => {
    return (
        <main className={styles.layout}>
            <Outlet />
        </main>
    )
}
