import { IconContext } from 'react-icons'

import { useQuiz } from './feautures/quiz/hooks/use-quiz'
import { Home } from './pages'

function App() {
    useQuiz()

    // initGame()
    /* verificar si exsiten los pasises en ls
        getCountries() -> getCountriesAPI | getCountriesLs
        resetSate()
        buildQuiz() -> buildQuizCaptial | buildQuizFlag
        setQUizIntoSTate()

        
    */
    return (
        <IconContext.Provider value={{ color: 'white', size: '20' }}>
            <Home />
        </IconContext.Provider>
    )
}

export default App
