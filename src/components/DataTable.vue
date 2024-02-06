<template>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="5"
      class="elevation-1 mr-5"
    >
    
  </v-data-table>
  </template>
  <script>
import axios from 'axios'
  export default {
    props: ['headers','items'],
    data () {
      return {
      
      }
    },
    
  }
</script>