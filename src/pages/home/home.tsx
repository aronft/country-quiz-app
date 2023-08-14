import { Text } from '@/components'
import { QuizApp } from '@/feautures'

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
            <QuizApp />
            {/* <Results /> */}
        </main>
    )
}
