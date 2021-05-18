<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card
          class="pa-8 ma-1 ajuda"
          dark
          elevation="2"
        >
          $ {{ajuda}}
        </v-card>
        <v-btn 
          dark 
          block
          class="btn-ajuda"
          to="/lista_ajuda"
        >
          Visualizar Ajudas
        </v-btn>
      </v-col>
      <v-col>
        <v-card 
          dark 
          class="pa-8 ma-1 gasto"
          elevation="2"
        >
          $ {{conta}}
        </v-card>
          <v-btn 
            dark 
            block
            class="btn-conta"
            to="/lista_conta"
          >
            Pagar Conta
          </v-btn>
      </v-col>
    </v-row>
    <v-row class="ma-2">
      
    </v-row>
    <v-row class="ma-2">
      
    </v-row>
  </v-container>
</template>

<script>
  import Api from '../api/index'
  export default {
    name: 'Home',
    data(){
      return {
        ajuda: 0,
        conta: 0
      }
    },
    created(){
      Api.inicio().then(resposta=>{
        this.ajuda = Number(resposta.data.saldo)
        this.conta = Number(resposta.data.conta)
      })
    }
  }
</script>
<style scoped>
  .ajuda{
    background-color: #01F558!important;
  }
  .gasto{
    background-color: #F5662A !important;
  }
  v-col{
    padding: 2px;
  }
  .btn-ajuda{
    background-color: #01F558 !important;
  }
  .btn-conta{
    background-color: #F5662A !important;
  }
</style>