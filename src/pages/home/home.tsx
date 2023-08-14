import { Text } from '@/components'
import { QuizApp, useGameQuizStore } from '@/feautures'
import { Results } from '@/feautures/results'

export const Home = () => {
    const { status } = useGameQuizStore((state) => state)
    return (
        <main>
            <Text
                tag="h1"
                color="gray"
                size="lg"
                style={{
                    marginBottom: 'var(--spacing-xs)',
                    textTransform: 'uppercase',
                }}
            >
                Country quiz
            </Text>
            {status === 'IN-GAME' || (status === 'WAITING' && <QuizApp />)}
            {status === 'DONE' && <Results />}
        </main>
    )
}
