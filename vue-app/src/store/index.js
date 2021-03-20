/*import {CreateStore} from 'vuex'

export default CreateStore({
  state: {
    task: []
  },
  mutations: {
    ADD_TASK(state, task) {
      let new_task = {'description': task, 'checked': false}
      state.task.push(new_task);
    }
  },
  actions: {
    addTask(context, task) {
      context.commit('ADD_TASK', task)
    }
  },
  modules: {
  }
})

*/




import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    task: []
  },
  mutations: {
    ADD_TASK(state, task) {
      let new_task = {'description': task, 'checked': false}
      state.task.push(new_task);
    }
  },
  actions: {
    addTask(context, task) {
      context.commit('ADD_TASK', task)
    }
  },
  modules: {
  }
})
