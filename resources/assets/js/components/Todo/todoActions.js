export const getTodos = function(store) {
  this.$http.get('api/v1/todos').then((response) => {
    var dispatch = store.dispatch;
    dispatch('GET_TODOS',response.data)
  })
}
export const saveTodo = function(store,postData) {
  this.$http.post('api/v1/todo',postData).then((response)=> {
    console.log(store)
    if(response.status == 201){
      var dispatch = store.dispatch;
      dispatch('ADD_TODOS',response.data)
    }
  }).catch((response)=>{
    console.log('Error',response);
  })
}
export const deleteTodo = function(store,todo) {
  var postData = {id: todo.id};
  this.$http.post('api/v1/todo-delete',postData).then((response) => {
    if(response.status == 200){
      var dispatch = store.dispatch;
      dispatch('DELETE_TODOS',todo);
    }
  }).catch((response)=>{
    console.log('Error',response);
  })
}
export const completedTodo = function(store,todo){
  var postData = {id: todo.id};
  this.$http.post('api/v1/todo-status',postData).then((response)=>{
    if (response.status == 200) {
      var dispatch = store.dispatch;
      dispatch('COMPLETED_TODOS',todo);
      // todo.completed = !todo.completed
    }
  }).catch((response) => {
    console.log('Error',response);
  })
}