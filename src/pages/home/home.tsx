import { Text } from '@/components'
import { Quiz } from '@/feautures'
import { Results } from '@/feautures/results'

export const Home = () => {
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
            <Quiz />
            {/* <Results /> */}
        </main>
    )
}
