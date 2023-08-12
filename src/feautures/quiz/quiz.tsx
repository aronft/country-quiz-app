import { Button, Card } from '@/components'

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
            <h2 style={{ marginBottom: '2rem' }}>Kuala</h2>
            <QuizOptionList style={{ marginBottom: 'var(--spacing-md)' }} />
            <footer style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button style={{ width: 'auto' }}>Next</Button>
            </footer>
        </Card>
    )
}
