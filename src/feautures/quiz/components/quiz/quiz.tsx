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
            <header
                className={styles.quiz__header}
                style={{
                    marginBottom:
                        actualQuestion?.type === 'FLAG'
                            ? 'var(--spacing-md)'
                            : '0px',
                }}
            >
                <div className={styles.quiz__adventure}>
                    <AdventureComponent />
                </div>
                {actualQuestion?.type === 'FLAG' && (
                    <img
                        style={{
                            width: '84px',
                            height: '54px',
                        }}
                        src={actualQuestion?.optionSelected?.flag}
                        alt={`flag from country`}
                    />
                )}
                <Text tag="p" size="md" color="thertiary-alt">
                    <span>{doneQuestions.length + 1}</span>/
                    <span>{questions.length}</span>
                </Text>
            </header>
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
