import { Button, Card } from '@/components'

import { QuizOptionList } from '.'
import styles from './quiz.module.css'

export const Quiz = () => {
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
