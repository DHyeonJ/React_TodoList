// action value
const ADD_TODO = "addTodo";
const DELETE_TODO = "deleteTodo";
const TOGGLE_STATUS_TODO = "toggleStatusTodo";
const GET_TODO = "getTodoById";

// action creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const toggleStatusTodo = (id) => {
  return {
    type: TOGGLE_STATUS_TODO,
    id,
  };
};

export const getTodoById = (id) => {
  return {
    type: GET_TODO,
    id,
  };
};

const initialState = { todos: [] };

// 리듀서
const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return { todos: [...state.todos, action.payload] };
    }
    case DELETE_TODO: {
      return {
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    }
    case TOGGLE_STATUS_TODO: {
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          }
          return todo;
        }),
      };
    }
    case GET_TODO: {
      return { todos: state.todos.filter((todo) => todo.id === action.id) };
    }
    default:
      return state;
  }
};

export default todo;
