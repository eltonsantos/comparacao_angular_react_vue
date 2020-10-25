<template>
  <div>
    <h1>Componente Home</h1>
    <h2>{{ msg }}</h2>
    <h3>{{ legenda }}</h3>
    <input type="text" v-model="legenda"/>
    <button @click="resetLegenda">Reset Legenda</button>
  </div>
</template>

<script>
export default {
  props: ['msg'],
  data: function() {
    return {
      legenda: 'Estou no Vue'
    }
  },
  methods: {
    resetLegenda() {
      this.legenda = 'Estou no Vue'
      console.log('Evento de click no Vue')
    }
  }
}
</script>

<style>

</style>