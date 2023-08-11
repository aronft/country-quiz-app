import { IconContext } from 'react-icons'

import { Button, Card } from './components'
import { QuizOption } from './feautures'

function App() {
    return (
        <>
            <IconContext.Provider value={{ color: 'white', size: '20' }}>
                <Card>
                    <h2 style={{ marginBottom: '2rem' }}>Kuala</h2>
                    <div
                        style={{
                            display: 'flex',
                            gap: '25px',
                            flexDirection: 'column',
                            width: '450px',
                            marginBottom: '1.5em',
                        }}
                    >
                        <QuizOption
                            letter="A"
                            name="Vietnam"
                            marked={false}
                            correct={false}
                        />
                        <QuizOption
                            letter="A"
                            name="Vietnam"
                            marked={false}
                            correct={false}
                        />
                        <QuizOption
                            letter="A"
                            name="Vietnam"
                            marked={true}
                            correct={false}
                        />
                        <QuizOption
                            letter="A"
                            name="Vietnam"
                            marked={true}
                            correct={true}
                        />
                    </div>
                    <footer
                        style={{ display: 'flex', justifyContent: 'flex-end' }}
                    >
                        <Button style={{ width: 'auto' }}>Next</Button>
                    </footer>
                </Card>
            </IconContext.Provider>
        </>
    )
}

export default App
