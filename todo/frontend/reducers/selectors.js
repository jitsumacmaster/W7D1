
const allTodos = (state) => {
  let keys = Object.keys(state.todos);
  return keys.map((id) => {
    return state.todos[id];
  });
};

window.allTodos = allTodos;

export default allTodos;
