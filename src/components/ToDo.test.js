import { fireEvent, render, screen } from '@testing-library/react'
import ToDo from './ToDo'

describe("Coret atau hapus", () => {
    test("Memastikan ketika klik akan mencoret text ", () => {
        const todo = {
            "id": 1,
            "task": "Give dog a bath",
            "complete": false
        }
        const handleClick = (e) => {
            todo.complete = !todo.complete
        }
        const todoElement = render(<ToDo todo={todo} handleToggle={handleClick} />)
        expect(todoElement.container.firstChild).not.toHaveStyle({textDecoration: 'line-through'})
        
        // fireEvent digunakan untuk menjalankan event
        fireEvent.click(todoElement.container.firstChild)
    
        // rerender digunakan untuk merender ulang component ketika ada perubahan pada props
        todoElement.rerender(<ToDo todo={todo} handleToggle={handleClick} />)
        expect(todoElement.container.firstChild).toHaveStyle({textDecoration: 'line-through'})
    })

    test("Memastikan ketika klik akan menghapus coretan pada text ", () => {
        const todo = {
            "id": 1,
            "task": "Give dog a bath",
            "complete": true
        }
        const handleClick = (e) => {
            todo.complete = !todo.complete
        }
        const todoElement = render(<ToDo todo={todo} handleToggle={handleClick} />)
        expect(todoElement.container.firstChild).toHaveStyle({textDecoration: 'line-through'})
        
        // fireEvent digunakan untuk menjalankan event
        fireEvent.click(todoElement.container.firstChild)
    
        // rerender digunakan untuk merender ulang component ketika ada perubahan pada props
        todoElement.rerender(<ToDo todo={todo} handleToggle={handleClick} />)
        expect(todoElement.container.firstChild).not.toHaveStyle({textDecoration: 'line-through'})
    })
    
})