import { Quiz } from '.'
import { useQuizStore } from './store'

export const QuizApp = () => {
    const actualQuestion = useQuizStore((state) => state.actualQuestion)
    if (!actualQuestion) {
        return <div>Loading Quiz</div>
    }
    // buscar las preguntas random
    return (
        <Quiz
            id={actualQuestion?.id}
            options={actualQuestion?.options}
            question={actualQuestion?.question}
            type={actualQuestion?.type}
            optionSelected={actualQuestion?.optionSelected}
            state={actualQuestion?.state}
        />
    )
}
