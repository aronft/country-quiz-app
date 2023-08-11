import { QuizOption } from './feautures'

function App() {
    return (
        <>
            <h1>Prueba</h1>
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
        </>
    )
}

export default App
