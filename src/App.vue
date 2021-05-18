<template>
  <v-app class="app">
    <v-app-bar
      app
      dark
      class="nav"
    >
    <strong>GASTO FAMILIA</strong>
    </v-app-bar>

    <v-main class="main">
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
    <v-bottom-navigation
      :value="value"
      class="nav"
      fixed
      app
    >
      <v-btn class="v-btn--active v-btn--active v-btn v-btn--is-elevated v-btn--has-bg v-btn--router theme--light v-size--default" to="/adicionar_conta">
        <span>Conta</span>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn class="v-btn--active v-btn--active v-btn v-btn--is-elevated v-btn--has-bg v-btn--router theme--light v-size--default" to="/">
        <span>inicio</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn class="v-btn--active v-btn--active v-btn v-btn--is-elevated v-btn--has-bg v-btn--router theme--light v-size--default" to="/adicionar_ajuda">
        <span>Ajuda</span>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      value: 1
    }
  },
  created() {

  },
  methods:{
    backHome(){
      this.$router.push({name: 'Home'})
    }
  }
};
</script>

<style scoped>
  .app{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 18px;
  }
  .nav{
    text-align: center !important;
    background-color:  #0dfae6cd!important;
  }

  .main{
    background-color: #0BDE91;
  }
</style>