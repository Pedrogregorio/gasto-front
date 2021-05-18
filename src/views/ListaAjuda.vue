<template>
    <div class="lista-conta">
      <v-row v-for="ajuda in ajudas" :key="ajuda.id">
        <v-col>
          <v-card
            class="pa-2 ma-1 ajuda"
            dark
          >
          <v-row>
            <v-col class="align-center">
              $ {{ajuda.valor}}
            </v-col>
            <v-col>
              {{ajuda.ajuda}} 
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ajuda.nome}}
            </v-col>
          </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
</template>

<script>
  import Api from '../api/index'
  export default {
    name: 'Home',
    data(){
      return {
        ajudas: [],
      }
    },
    created(){
      Api.listarAjuda().then(resposta=>{
        this.ajudas = resposta.data.ajuda
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
  .gasto-pago{
    background-color: chartreuse;
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