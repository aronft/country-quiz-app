import { BsArrowRight } from 'react-icons/bs'

import { Card, Link, Text } from '@/components'
import { Container } from '@/components/objects'

import styles from './na-match.module.css'
export const NotMatch = () => {
    return (
        <Container tag="section" className={styles['no-match-container']}>
            <Card className={styles['no-match']}>
                <Text tag="h1" className={styles['no-match__title']}>
                    404
                </Text>
                <Text
                    tag="h2"
                    size="lg"
                    style={{
                        fontWeight: 500,
                        marginBottom: 'var(--spacing-xs)',
                    }}
                >
                    Page not found
                </Text>
                <Text
                    tag="p"
                    style={{
                        maxWidth: '500px',
                        marginBottom: 'var(--spacing-xs)',
                    }}
                >
                    This page doesn't exist or was removed, try searching for it
                    or go home
                </Text>
                <footer className={styles['no-match__footer']}>
                    <Link
                        to={'/'}
                        icon={<BsArrowRight style={{ color: 'inherit' }} />}
                    >
                        Go Home
                    </Link>
                </footer>
            </Card>
        </Container>
    )
}
