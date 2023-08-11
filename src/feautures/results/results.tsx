import WinnerComponent from '@/assets/winners'
import { Button, Card } from '@/components'

export const Results = () => {
    return (
        <Card>
            <div
                style={{
                    display: 'flex',
                    gap: '25px',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '450px',
                    marginBottom: '72px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '72px',
                    }}
                >
                    <WinnerComponent />
                </div>
                <h2
                    style={{
                        fontSize: '2.625rem',
                        fontWeight: 700,
                        lineHeight: '72px',
                    }}
                >
                    Results
                </h2>
                <p style={{ fontSize: '1.25rem', fontWeight: 400 }}>
                    you got <span>4</span> correct anwers
                </p>
            </div>
            <footer style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    style={{ width: 'auto', fontWeight: 600 }}
                    size="large"
                    variant="outline"
                    color="thertiary"
                >
                    Try again
                </Button>
            </footer>
        </Card>
    )
}
