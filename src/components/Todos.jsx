import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo,completedTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
  return (
    <>
    <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
	<div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div class="mb-4">
            <h1 class="text-grey-darkest">Todo List</h1>
        </div>
        {
            todos.map((todo) => (
            <div class="flex mb-4 items-center" key={todo.id}>
                <button class="flex-no-shrink p-1 ml-2 mr-2 bg-transparent font-semibold rounded">✎</button>

                <p class="w-full text-grey-darkest">{todo.text}</p>
                {todo.status !== true && (
                    <button class="flex-no-shrink p-2 ml-2 border-2 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 
                    border border-green-500 hover:border-transparent rounded" onClick={() => dispatch(completedTodo(todo.id))}>Done</button>
                )}
                <button class="flex-no-shrink p-2 ml-2 border-2 bg-transparent hover:bg-red-500 text-red-700 
                font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
                
            </div>
            ))
        }
    </div>
</div>  
    </>
  )
}

export default Todos