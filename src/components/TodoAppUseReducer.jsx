import React, { useReducer } from 'react';

// Reducer fonksiyonu
function todoReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case 'toggle':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'remove':
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Bilinmeyen action: ${action.type}`);
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const handleAddTodo = () => {
    const text = prompt('Yeni todo:');
    if (text) {
      dispatch({ type: 'add', text });
    }
  };

  return (
    <div>
      <button onClick={handleAddTodo}>Todo Ekle</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => dispatch({ type: 'toggle', id: todo.id })}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: 'remove', id: todo.id })}>
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
