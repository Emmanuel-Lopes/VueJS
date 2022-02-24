<template>
  <b-card no-body v-expand-element class="h-100 bg-primary shadow">
      <b-card-body class="fw-bold text-white p-2">
        {{foto.titulo}}
      </b-card-body>
      <ResponsiveImg :url="foto.url" :titulo="foto.titulo"/>
  </b-card>
</template>

<script>
  import ResponsiveImg from "../responsive-img/ResponsiveImg.vue"
  export default {
    props: {
      foto: Object
    },
    components: {
      ResponsiveImg
    }
  }
</script>

<style scoped>
</style>>