// action value
const ADD_TODO = "addTodo";
const DELETE_TODO = "deleteTodo";
const TOGGLE_STATUS_TODO = "toggleStatusTodo";
// const GET_TODO_BY_ID = "getTodoById";

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

const initialState = { todos: [] };

// Redux
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
      console.log(action);
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
    default:
      return state;
  }
};

export default todo;
