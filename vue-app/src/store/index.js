/*import { createStore } from 'vuex'


export default createStore({
  state: {
    tasks: [],
    titres: []
  },
  mutations: {
    ADD_TASK(state, task) {
      let new_task = { 'description': task, 'checked': false }
      state.tasks.push(new_task);
    },
    CHECK_TASK(state, index) {
      state.tasks[index]['checked'] = !state.tasks[index]['checked']
    },
    REMOVE_TASK(state, index) {
      state.tasks.splice(index, 1)
    },

    ADD_TITRE(state, titres) {
      let new_titres = { 'description': titres, 'checked': false }
      state.titres.push(new_titres);
    },
    CHECK_TITRE(state, index) {
      state.titres[index]['checked'] = !state.titres[index]['checked']
    },
    REMOVE_TITRE(state, index) {
      state.titres.splice(index, 1)
    }


  },
  actions: {
    addTask(context, task) {
      context.commit('ADD_TASK', task)
    },
    checkTask(context, index) {
      context.commit('CHECK_TASK', index)
    },
    removeTask(context, index) {
      context.commit('REMOVE_TASK', index)
    },

    addTitre(context, titre) {
      context.commit('ADD_TITRE', titre)
    },
    checkTitre(context, index) {
      context.commit('CHECK_TITRE', index)
    },
    removeTitre(context, index) {
      context.commit('REMOVE_TITRE', index)
    }
  },
  modules: {
  }
})*/



import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    titres: [],
    meta_description: [],
    contenu: [],
  },
  mutations: {
    ADD_TASK(state, task) {
      let new_task = { 'description': task, 'checked': false }
      state.tasks.push(new_task);
    },
    CHECK_TASK(state, index) {
      state.tasks[index]['checked'] = !state.tasks[index]['checked']
    },
    REMOVE_TASK(state, index) {
      state.tasks.splice(index, 1)
    },
    /* ajout du titre */
    ADD_TITRE(state, titres) {
      let new_titres = { 'description': titres, 'checked': false }
      state.titres.push(new_titres);
    },
    CHECK_TITRE(state, index) {
      state.titres[index]['checked'] = !state.titres[index]['checked']
    },
    REMOVE_TITRE(state, index) {
      state.titres.splice(index, 1)
    },
  /* Ajout de la description */
    ADD_DESCRIPTION(state, meta_description) {
      let new_meta_description = { 'description': meta_description, 'checked': false }
      state.meta_description.push(new_meta_description);
    },
    CHECK_DESCRIPTION(state, index) {
      state.meta_description[index]['checked'] = !state.meta_description[index]['checked']
    },
    REMOVE_DESCRIPTION(state, index) {
      state.meta_description.splice(index, 1)
    },

    /*Ajout du contenu*/
    ADD_CONTENU(state, contenu) {
      let contenu = { 'description': contenu, 'checked': false }
      state.meta_description.push(new_contenu);
    },
    CHECK_CONTENU(state, index) {
      state.contenu[index]['checked'] = !state.contenu[index]['checked']
    },
    REMOVE_CONTENU(state, index) {
      state.contenu.splice(index, 1)
    },


  },
  actions: {
    addTask(context, task) {
      context.commit('ADD_TASK', task)
    },
    checkTask(context, index) {
      context.commit('CHECK_TASK', index)
    },
    removeTask(context, index) {
      context.commit('REMOVE_TASK', index)
    },

    addTitre(context, titre) {
      context.commit('ADD_TITRE', titre)
    },
    checkTitre(context, index) {
      context.commit('CHECK_TITRE', index)
    },
    removeTitre(context, index) {
      context.commit('REMOVE_TITRE', index)
    },

    addDescription(context, meta_description) {
      context.commit('ADD_DESCRIPTION', meta_description)
    },
    checkDescription(context, index) {
      context.commit('CHECK_DESCRIPTION', index)
    },
    removeDescription(context, index) {
      context.commit('REMOVE_DESCRIPTION', index)
    }
  },
  modules: {
  }
})

/*
export default createStore({
  state: {
    tasks: [],
    titres: []
  },
  mutations: {
    ADD_TASK(state, task) {
      let new_task = { 'description': task, 'checked': false }
      state.tasks.push(new_task);
    },
    CHECK_TASK(state, index) {
      state.tasks[index]['checked'] = !state.tasks[index]['checked']
    },
    REMOVE_TASK(state, index) {
      state.tasks.splice(index, 1)
    },

    ADD_TITRE(state, titres) {
      let new_titres = { 'description': titres, 'checked': false }
      state.titres.push(new_titres);
    },
    CHECK_TITRE(state, index) {
      state.titres[index]['checked'] = !state.titres[index]['checked']
    },
    REMOVE_TITRE(state, index) {
      state.titres.splice(index, 1)
    }


  },
  actions: {
    addTask(context, task) {
      context.commit('ADD_TASK', task)
    },
    checkTask(context, index) {
      context.commit('CHECK_TASK', index)
    },
    removeTask(context, index) {
      context.commit('REMOVE_TASK', index)
    },

    addTitre(context, titre) {
      context.commit('ADD_TITRE', titre)
    },
    checkTitre(context, index) {
      context.commit('CHECK_TITRE', index)
    },
    removeTitre(context, index) {
      context.commit('REMOVE_TITRE', index)
    }
  },
  modules: {
  }
})
*/