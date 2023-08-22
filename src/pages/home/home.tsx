import { Text } from '@/components'
import { QuizApp, useGameQuizStore } from '@/feautures'
import { Results } from '@/feautures/results'

import styles from './home.module.css'

export const Home = () => {
    const { status } = useGameQuizStore((state) => state)
    return (
        <main className={styles.home}>
            <Text
                tag="h1"
                color="gray"
                size="lg"
                style={{
                    marginBottom: 'var(--spacing-xs)',
                    textTransform: 'uppercase',
                }}
                className={styles.home__title}
            >
                Country quiz
            </Text>
            {status === 'IN-GAME' || (status === 'WAITING' && <QuizApp />)}
            {status === 'DONE' && <Results />}
        </main>
    )
}
