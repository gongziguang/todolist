<template>
  <validator name="todoForm">
    <form v-on:submit.prevent="addTodo()" novalidate>
      <div class="form-group">
        <input 
        id="todotext" 
        type="text" 
        class="form-control"
        v-validate:todotext="{ required:{rule: true,message:'please add some text.'}}"
        placeholder="Enter new Todo" 
        v-model="todo.title">
      </div>
      <div class="form-group" v-if="showError">
        <span v-if="$todoForm.todotext.required">{{$todoForm.todotext.required}}</span>
      </div>
    </form>
  </validator>
</template>

<script type="text/javascript">
import { saveTodo } from './todoActions'
  export default{
    data () {
      return {
        todo: {id: null, title: '', completed: false},
        showError: false
      }
    },
    methods: {
      addTodo () {
        if(this.$todoForm.valid){
          this.saveTodo(this.todo);
          this.todo = {id: null, title: '', completed: false};
          this.showError = false
        }else{
          this.showError = true
        }
      }
    },
    vuex: {
      getters: {
        todoStore: state => state.todoStore.todos
      },
      actions: {
        saveTodo
      }
    }
  }
</script>