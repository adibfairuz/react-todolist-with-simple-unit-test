import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from '../App'

describe('test ngetik', () => {
    test('Submit ', () => {
        render(<App />)
        const inputElement = screen.getByPlaceholderText("Enter task...")
        const text = "Memberi makan kucing"
        userEvent.type(inputElement, text)
        expect(inputElement).toHaveValue(text)
        const submit = screen.getByText("Submit")
        fireEvent.submit(submit)
        expect(screen.getByText(text)).toBeInTheDocument()
    })
    
})
