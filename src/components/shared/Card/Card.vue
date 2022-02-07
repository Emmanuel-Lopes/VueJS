<template>
  <b-card no-body class="h-100 bg-primary shadow">
      <b-card-body class="fw-bold text-white p-2">
        {{foto.titulo}}
      </b-card-body>
      <b-card-img 
      :src="foto.url"
      :alt="foto.titulo" 
      img-top
      class="image rounded-bottom rounded-0"
      />
  </b-card>
</template>

<script>
  export default {
    props: {
      foto: Object
    }
  }
</script>

<style scoped>
  .image{
    width: 100;
    height: 150px;
  }
</style>>