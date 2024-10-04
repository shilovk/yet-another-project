import { createAction } from '@reduxjs/toolkit'

export const new_actions = createAction('ACTION_NAME');


export const addTodo = createAction('todos/add', function prepare(text) {
  return {
    payload: {
      text,
      id: 1,
      createdAt: '08.04.20201',
    },
  }
})

// console.log(addToDo)
// {
//     type: 'todos/add',
//     payload: {
//                text,
//                id: 1,
//                createdAt: '08.04.20201'
//     }
//  }