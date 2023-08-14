import { Button, Card, Text } from '@/components'

import { QuizOptionList } from '.'
import styles from './quiz.module.css'
import { useQuizStore } from './store'

export const Quiz = () => {
    const questions = useQuizStore((state) => state.questions)
    console.log(questions)

    // buscar las preguntas random
    /* 
        gameState {
            score: number
            status: 'in-game' | 'results'
        }
       quizState: {
            questions: []
            currentQuestion: {
                type: 'country' | 'capital'
                options: []
                state: 'waiting' | 'responded'
                optionIdSelecetd: null | string
            }
            doneQuestions: []
        }
    */
    return (
        <Card className={styles.quiz}>
            <Text
                tag="h2"
                size="md"
                color="thertiary-alt"
                style={{ marginBottom: 'var(--spacing-lg)' }}
            >
                Kuala
            </Text>
            <QuizOptionList style={{ marginBottom: 'var(--spacing-md)' }} />
            <footer style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button style={{ width: 'auto', fontWeight: 700 }}>Next</Button>
            </footer>
        </Card>
    )
}
