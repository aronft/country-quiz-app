import { Button, Card, Text } from '@/components'

import { Question } from '../../models'
import { QuizOptionList } from '..'
import styles from './quiz.module.css'

type QuizProps = Question & {}

export const Quiz = ({ id, optionSelected, options, question }: QuizProps) => {
    return (
        <Card className={styles.quiz}>
            <Text
                tag="h2"
                size="md"
                color="thertiary-alt"
                style={{ marginBottom: 'var(--spacing-lg)' }}
            >
                {question}
            </Text>
            <QuizOptionList
                options={options}
                style={{ marginBottom: 'var(--spacing-md)' }}
            />
            <footer style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button style={{ width: 'auto', fontWeight: 700 }}>Next</Button>
            </footer>
        </Card>
    )
}
