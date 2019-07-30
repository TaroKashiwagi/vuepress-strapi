<template lang="pug">
div
  h1 Hello World
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

export default {
  components: {
  },
  computed: {
  },
  created () {
    axios.get('http://localhost:1337/tests')
      .then(response => {
        console.log(response.data)
      })
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
</style>