import '@testing-library/jest-dom'

import { fireEvent, render, screen } from '@testing-library/react'

import { Button } from './button'

describe('Button ', () => {
    test('should render button with text as a children', () => {
        render(<Button>Send</Button>)
        const button = screen.getByRole('button', { name: /send/i })
        expect(button).toBeInTheDocument()
    })

    test('should call the click button', () => {
        const onClick = jest.fn()
        render(<Button onClick={onClick}>Send </Button>)
        const button = screen.getByRole('button', { name: /send/i })
        fireEvent.click(button)
        expect(onClick).toHaveBeenCalledTimes(1)
    })

    test('should render mulitple childrens', () => {
        render(
            <Button>
                <span>Send</span>
                <span>Test</span>
            </Button>
        )
        const button = screen.getByRole('button', { name: /Send Test/i })
        expect(button).toBeInTheDocument()
    })
})
