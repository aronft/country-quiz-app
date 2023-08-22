import { useEffect } from 'react'
import { IconContext } from 'react-icons'
import { BrowserRouter } from 'react-router-dom'

import { useQuiz } from './feautures/quiz/hooks/use-quiz'
import { AppRouter } from './router/app-router'

function App() {
    const { initGame } = useQuiz()

    useEffect(() => {
        initGame()
    }, [])

    return (
        <BrowserRouter>
            <IconContext.Provider value={{ color: 'white', size: '20' }}>
                <AppRouter />
            </IconContext.Provider>
        </BrowserRouter>
    )
}

export default App
