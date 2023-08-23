import { Quiz } from './components'
import { useQuizStore } from './store'

export const QuizApp = () => {
    const { actualQuestion, doneQuestions, questions } = useQuizStore(
        (state) => state
    )
    if (!actualQuestion) {
        return <div>Loading Quiz</div>
    }
    return (
        <Quiz
            actualQuestion={actualQuestion}
            totalOfQuestions={questions.length}
            totalQuestionResponded={doneQuestions.length}
        />
    )
}
