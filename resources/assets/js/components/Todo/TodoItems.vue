<template>
  <div>
    <ul class="list-group">
      <li 
        v-for="todo in todoStore"
        class="list-group-item"
        v-bind:class="{ 'completed' : todo.completed }">
          {{todo.title}}
          <button class="btn btn-xs btn-danger pull-right"
                  @click="todoDelete(todo)">
            <i class="fa fa-trash"></i>
          </button>
          <button class="btn btn-xs pull-right margin-right-10" 
          v-bind:class="{'btn-success' : todo.completed, 'btn-warning' : !todo.completed}"
          v-on:click="todoCompleted(todo)">{{todo.completed ? 'Completed' : 'Pending'}}</button>
        </li>
    </ul>
  </div>
</template>
<script>
  import {getTodos, deleteTodo, completedTodo } from './todoActions'
  export default {
    created () {
      this.getTodos()
    },
    methods: {
      todoCompleted(todo) {
        this.completedTodo(todo)
      },
      todoDelete(todo) {
        this.deleteTodo(todo)
      }
    },
    vuex: {
      getters: {
        todoStore: state => state.todoStore.todos
      },
      actions: {
        getTodos,deleteTodo,completedTodo
      }
    }
  }
</script>
