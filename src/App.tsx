import { IconContext } from 'react-icons'

import { Home } from './pages'

function App() {
    return (
        <IconContext.Provider value={{ color: 'white', size: '20' }}>
            <Home />
        </IconContext.Provider>
    )
}

export default App
