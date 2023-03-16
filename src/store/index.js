import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas:[
      {id:1, titulo: "Teste1", concluido: false},
      {id:2, titulo: "Teste2", concluido: false},
      {id:3, titulo: "MAKONHA", concluido: false}
      ]
  },
  getters: {
  },
  mutations: {
    adicionarTarefa(state, titulo){
        if(titulo){
          state.tarefas.push({
            id: new Date().getTime(),
            titulo,
            concluido: false
          })
        }
    },
    removeTarefa(state, id){
      state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== id)
    }
  },
  actions: {
  },
  modules: {
  }
})
