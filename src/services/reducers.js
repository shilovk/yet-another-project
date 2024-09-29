import { combineReducers } from 'redux';

// Начальное состояние и действия для каждого редьюсера

// Редьюсер списка дел (todoList)
const initialTodoListState = [
  { id: 1, text: 'Купить молоко', completed: false },
  { id: 2, text: 'Прочитать книгу', completed: true }
];

const todoList = (state = initialTodoListState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: state.length + 1,
          text: action.payload.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
};

// Редьюсер для пользователя (user)
const initialUserState = {
  id: null,
  name: '',
  loggedIn: false
};

const user = (state = initialUserState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        loggedIn: true
      };
    case 'LOGOUT':
      return {
        ...state,
        id: null,
        name: '',
        loggedIn: false
      };
    default:
      return state;
  }
};

// Редьюсер для коллективной работы над списком дел (collaboration)
const initialCollaborationState = {
  collaborators: []
};

const collaboration = (state = initialCollaborationState, action) => {
  switch (action.type) {
    case 'ADD_COLLABORATOR':
      return {
        ...state,
        collaborators: [...state.collaborators, action.payload]
      };
    case 'REMOVE_COLLABORATOR':
      return {
        ...state,
        collaborators: state.collaborators.filter(
          collaborator => collaborator.id !== action.payload.id
        )
      };
    default:
      return state;
  }
};

// Корневой редьюсер
export const rootReducer = combineReducers({
  todoList,      // список дел
  user,          // информация о пользователе
  collaboration  // информация о совместной работе
});
