import { render, screen } from "@testing-library/react";
import ToDoList from "./ToDoList";

describe('TodoList', () => {
    const todoList = [
        {
            "id": 1,
            "task": "mandiin anjing",
            "complete": false
        },
        {
            "id": 2,
            "task": "memberi makan kucing",
            "complete": false
        }
    ]
    test('Tampilkan data jika ada', () => {
        render(<ToDoList toDoList={todoList} handleFilter={() => jest.fn()} handleToggle={() => jest.fn()} />)
        const todo = screen.getAllByTestId("todo")
        expect(todo[0]).toBeInTheDocument()
    })
})



// jest.mock('ToDoList', () => {
//     return jest.fn(() => null)
// })

// expect(ToDoList).toHaveBeenCalledWith()