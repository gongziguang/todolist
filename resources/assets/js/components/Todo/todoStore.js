const state = {
  todos: []
}

const mutations = {
  GET_TODOS (state, todos) {
    state.todos = todos;
  },
  ADD_TODOS (state,todo) {
    state.todos.push((todo));
  },
  DELETE_TODOS (state,todo) {
    state.todos.$remove(todo);
  },
  COMPLETED_TODOS (state,todo) {
    todo.completed = !todo.completed
  }

}
export default{
  state,mutations
}