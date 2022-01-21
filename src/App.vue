<template>
  <div class="container">
    <h1 class="h1 text-center mb-4 mt-2">{{titulo}}</h1>  <!-- ou v-text="titulo" -->
      <ul class="d-flex flex-lg-row flex-sm-column">
        <li class="m-4 border card rounded round-3 w-100 h-100 shadow" v-for="foto of fotos">
          <h2 class="card-header text-center text-white bg-primary">{{foto.titulo}}</h2>
          <img class="card-img-bottom img-fluid" :src="foto.url" :alt="foto.titulo" srcset="">
        </li>
      </ul> 
  </div>
</template>

<script>
  export default {

    data() {

      return {
       
        titulo: 'Criaturas Mitológicas',
        fotos: [
          {
            url: 'https://t8j5n5j3.rocketcdn.me/wp-content/uploads/2019/03/dragoes-qual-a-origem-do-mito-e-suas-variacoes-pelo-mundo-1.jpg',
            titulo: 'Dragão'
          },
          {
            url: 'https://www.infoescola.com/wp-content/uploads/2008/04/minotauro.jpg',
            titulo: 'Minotauro'
          },
          {
            url: 'https://i.pinimg.com/236x/9f/51/37/9f513769afa545a9237a9fe923012bd3.jpg',
            titulo: 'Centauro'
          }
        ]
      }
    }
  }
</script>

<style>

</style>