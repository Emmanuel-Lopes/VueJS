<template>
    <img 
      :src="url"
      :alt="titulo"
      class="image rounded-bottom rounded-0"
      />
</template>
<script>
  export default {
    props: [
      'url', 'titulo'
    ]
  }
</script>

<style scoped>
  .image{
    width: 100;
    height: 150px;
  }
</style>>