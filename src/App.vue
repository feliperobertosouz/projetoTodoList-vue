<template>
    <v-app id="inspire">
      <!-- <v-navigation-drawer
        v-model="drawer"
        app
      >
      </v-navigation-drawer> -->
  
      <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            To do List
          </v-list-item-title>
          <v-list-item-subtitle>
            Feita por Felipe Roberto
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to ="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
      <!-- <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-toolbar-title>Lista de afazeres</v-toolbar-title>
      </v-app-bar> -->
      <v-app-bar
      app
      prominent
      color="#43a047"
      dark
      shrink-on-scroll
      src="./assets/bg.jpg"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Tarefas</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  
      <v-main>
        <router-view/>
      </v-main>
    </v-app>
  </template>
  
  <script>
    export default {
      data: () => ({ drawer: null,items: [
          { title: 'Lista de Tarefas', icon: 'mdi-view-dashboard' , to:'/'},
          { title: 'Informações', icon: 'mdi-help-box' , to:'/sobre'},
        ],}),
    }
  </script>