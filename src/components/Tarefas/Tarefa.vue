<template>
    <div>
        <v-list-item
        :class="{'blue lighten-5':tarefaR.concluido}"
        @click="changeValue"
        >
          <template v-slot:default="{}">
            <v-list-item-action>
              <v-checkbox :input-value="tarefaR.concluido"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
              :class="{'text-decoration-line-through':tarefaR.concluido}"
              >{{tarefa.titulo}}</v-list-item-title>
              <v-list-item-subtitle>Criado pelo componentTarefa</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
          <v-btn icon
          @click.stop = "handleRemoveTarefa(tarefaR.id)">
            <v-icon color="red lighten-1">mdi-trash-can</v-icon>
          </v-btn>
        </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider> </v-divider>
    </div>
</template>

<script>
export default {
  props:['tarefa'],
    name: 'tarefa-component',
    data(){
      return{tarefaR: this.tarefa}
      
    }, methods:{
      changeValue(){
        this.tarefaR.concluido = !this.tarefaR.concluido
      },handleRemoveTarefa(id){
        this.$store.commit('removeTarefa', id)
      }
    }
    
}
</script>

<style>

</style>