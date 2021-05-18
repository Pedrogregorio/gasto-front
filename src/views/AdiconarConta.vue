<template>
  <div class="pagar-conta">
    <v-card 
      dark 
      class="pa-4 gasto"
    >
    <v-form>
      <v-text-field
        label="Nome Gasto"
        v-model="gasto"
        required
      />
    
      <v-select
        v-model="select"
        :items="items"
        label="Pessoa"
        required
      />
    
      <v-text-field
        v-model="valor"
        type="number"
        label="Valor"
        required
      />

      <v-text-field
        v-model="parcela"
        type="number"
        label="Parcela"
        required
      />

      <v-btn class="ajuda" @click="adicionarConta">+ Adicionar</v-btn>
    </v-form>  
    </v-card>
  </div>
</template>
<script>
  import Api from '../api/index'
  export default {
    data() {
      return {
        name: 'Home',
        gasto: '',
        parcela: 1,
        select: null,
        items: [
          'Mae',
          'Pai',
          'Pedro',
          'Yasmin',
        ],
        valor: ''
      }
    },
    methods: {
      adicionarConta(){
        const request = {
          nome: this.select,
          conta: this.gasto,
          valor: this.valor,
          parcela: this.parcela
        }
        Api.adicionarContaBanco(request).then(()=>{
          this.$router.push({name: "ListaConta"})
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