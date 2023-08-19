import AdventureComponent from '@/assets/adventure'
import { Button, Card, Text } from '@/components'

import { useQuiz, useQuizStore } from '../..'
import { Question } from '../../models'
import { QuizOptionList } from '../quiz-option-list'
import styles from './quiz.module.css'

type QuizProps = Question & {}

export const Quiz = ({ id, optionSelected, options, question }: QuizProps) => {
    const { actualQuestion, questions, doneQuestions } = useQuizStore(
        (state) => state
    )
    const { nextQuestion } = useQuiz()
    return (
        <Card className={styles.quiz}>
            <div className={styles.quiz__adventure}>
                <AdventureComponent />
            </div>
            {actualQuestion?.type === 'FLAG' && (
                <img
                    style={{
                        width: '84px',
                        height: '54px',
                        marginBottom: 'var(--spacing-md)',
                    }}
                    src={actualQuestion?.optionSelected?.flag}
                    alt={`flag from country`}
                />
            )}
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
                {actualQuestion?.state === 'RESPONDED' &&
                    questions.length !== doneQuestions.length && (
                        <Button
                            style={{ width: 'auto', fontWeight: 700 }}
                            onClick={() => {
                                nextQuestion()
                            }}
                        >
                            Next
                        </Button>
                    )}
            </footer>
        </Card>
    )
}
