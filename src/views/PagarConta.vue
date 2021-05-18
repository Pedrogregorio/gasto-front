<template>
  <div class="pagar-conta">
    <v-card 
      dark 
      class="pa-4 gasto"
    >
      <div class="pa-4">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Valor 1p: $ {{contas.valor}}</v-list-item-title>
            <v-list-item-subtitle>Valor {{contas.parcela}}p: $ {{valor_bruto}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Parcelas: {{contas.parcela}} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Gasto: {{contas.conta}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-checkbox 
          label="Pagar Todas as parcelas?"
          v-model="parcela" 
        />
        <v-btn class="ajuda" @click="pagarConta(contas._id)">Pagar</v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
  import Api from '../api/index'
  export default {
    name: 'Home',
    data(){
      return {
        contas: [],
        valor_bruto: null,
        parcela: false,
        id: this.$route.params.id,
      }
    },
    created(){
      Api.detalheConta(this.id).then(resposta=>{
        this.contas = resposta.data
        this.valor_bruto = this.contas.valor * this.contas.parcela
      })
    },
    methods: {
      pagarConta(){
        if(this.parcela == 1){
          this.parcela = true  
        }
        const request = {
          conta: this.contas,
          all_parcelas: this.parcela
        }
        Api.pagarContaBanco(request).then(()=>{
          this.$router.push({name: 'ListaConta'})
        })
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