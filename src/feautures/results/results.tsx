import WinnerComponent from '@/assets/winners'
import { Button, Card, Text } from '@/components'

import { useGameQuizStore, useQuiz } from '..'

export const Results = () => {
    const { score } = useGameQuizStore((state) => state)
    const { resetGame } = useQuiz()
    return (
        <Card>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '450px',
                    marginBottom: 'var(--spacing-2xl)',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: 'var(--spacing-2xl)',
                    }}
                >
                    <WinnerComponent />
                </div>
                <Text
                    tag="h2"
                    color="thertiary"
                    size="xl"
                    style={{
                        fontWeight: 700,
                    }}
                >
                    Results
                </Text>
                <Text
                    tag="p"
                    size="lg"
                    color="thertiary"
                    style={{
                        fontSize: '1.25rem',
                        fontWeight: 400,
                        textTransform: 'capitalize',
                    }}
                >
                    you got
                    <Text
                        tag="span"
                        size="lg"
                        color="success-alt"
                        style={{ fontWeight: 700, paddingInline: '5px' }}
                    >
                        {score}
                    </Text>
                    correct anwers
                </Text>
            </div>
            <footer style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    style={{ width: 'auto', fontWeight: 600 }}
                    size="large"
                    variant="outline"
                    color="thertiary"
                    onClick={() => {
                        resetGame()
                    }}
                >
                    Try again
                </Button>
            </footer>
        </Card>
    )
}
