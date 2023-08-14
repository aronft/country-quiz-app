import { useEffect } from 'react'
import { IconContext } from 'react-icons'

import { useQuiz } from './feautures/quiz/hooks/use-quiz'
import { Home } from './pages'

function App() {
    const { initGame } = useQuiz()

    useEffect(() => {
        initGame()
    }, [])

    return (
        <IconContext.Provider value={{ color: 'white', size: '20' }}>
            <Home />
        </IconContext.Provider>
    )
}

export default App
