<template>
    <div class="lista-conta">
      <v-row v-for="conta in contas" :key="conta.id">
        <v-col>
          <v-card
            :class="conta.ativa ? 'pa-2 ma-1 gasto' : 'pa-2 ma-1 gasto-pago'"
            :disabled="conta.ativa ? false : true"
            dark
          >
          <v-row>
            <v-col class="align-center">
              $ {{conta.valor}} {{conta.conta}} 
            </v-col>
            <v-col>
              {{conta.parcela}} p.
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{conta.nome}}
            </v-col>
            <v-col>
              <v-btn v-if="conta.ativa" @click="pagarConta(conta._id)">Pagar Conta</v-btn>
              <v-btn v-else>Conta Paga</v-btn>
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
        contas: [],
      }
    },
    created(){
      Api.listarAjuda().then(resposta=>{
        this.contas = resposta.data.conta
      })
    },
    methods: {
      pagarConta(id){
        this.$router.push({name: 'PagarConta', params: { id: id } })
      }
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