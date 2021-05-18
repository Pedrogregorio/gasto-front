<template>
  <div class="pagar-conta">
    <v-card 
      dark 
      class="pa-4 ajuda"
    >
    <v-form>
      <v-text-field
        label="Nome ajuda"
        v-model="ajuda"
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

      <v-btn class="btn-ajuda" @click="adicionarAjuda">+ Adicionar</v-btn>
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
        ajuda: '',
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
      adicionarAjuda(){
        const request = {
          nome: this.select,
          ajuda: this.ajuda,
          valor: this.valor,
        }
        Api.adicionarAjudaBanco(request).then(()=>{
          this.$router.push({name: "Home"})
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