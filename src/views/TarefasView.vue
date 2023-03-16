<template>
    <div>
      <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="campoInput"
            label="Insira a tarefa :)"
            outlined
            clearable
            @keyup.enter="handleAddTarefa"
          ></v-text-field>
        </v-col>
        <v-list
      flat
      subheader
    >
      <v-list-item-group
        multiple
        active-class=""
      >
        <div
        v-for="tarefa, index  in $store.state.tarefas"
        :key="index">
          <Tarefa
          :tarefa="tarefa"
          />
        </div>
        <!-- CHAMANDO OS COMPONENTS -->
        
      </v-list-item-group>
      
    </v-list>
    </div>
</template>

<script>
import Tarefa from "../components/Tarefas/Tarefa.vue"
export default {
  name: 'tarefas-view',
  components: {
    Tarefa
  },
  data(){
    return{
      campoInput:null,
    }
  }, methods:{
    handleAddTarefa(){
     this.$store.commit('adicionarTarefa', this.campoInput)
        this.campoInput = null
    }
  }
}
</script>