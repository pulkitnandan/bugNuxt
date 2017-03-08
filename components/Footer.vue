<template>
  <footer>
    Visit our website for more documentation : <a href="https://nuxtjs.org" target="_blank">nuxtjs.org</a>
  </footer>
</template>
<script>
  import { get, urls } from '~plugins/api'

  export default {
    async data () {
      const bugData = await get(urls.getMe())
      return {
        bug : bugData
      }
    },
    methods: {
      onNavClick () {
        this.isOpen = !this.isOpen
      }
    }
  }
</script>
