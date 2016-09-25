import Vue from 'vue'
import VueValidator from 'vue-validator'
import VueResource from 'vue-resource'

import store from './vuex/store'
import TodoItems from './components/Todo/TodoItems.vue'
import TodoAddForm from './components/Todo/TodoAddForm.vue'
import TodoHeader from './components/TodoHeader.vue'


Vue.use(VueValidator);
Vue.use(VueResource);

Vue.component('todo-item', TodoItems);
Vue.component('todo-add-form', TodoAddForm);
Vue.component('todo-header', TodoHeader);

// vue header for x-csfr-token
Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector("meta[name=csrf-token]").getAttribute('content')

new Vue({
  el: '#vue-app',
  store,
});
