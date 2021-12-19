import { render, screen } from '@testing-library/react'
import Header from './Header'

test("checkk 'to do list' text", () => {
    // render wajib dimasukkan untuk mengambil element pada component
    // render digunakkan untuk mengambil struktur html
    render(<Header />)
    const text = screen.getByText("To Do List");
    expect(text).toBeInTheDocument()
})