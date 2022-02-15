<template>
  <div class="container justify-content-center p-0">
      <NavBar :rotas="routes" />
    <transition name="pagina">  
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import { routes } from "./routes";
  import NavBar from "./components/shared/nav-bar/NavBar.vue"
  export default {
    data() {
      return {
        routes
      }
    },
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .pagina-enter-active, .pagina-leave-active {
    transition: opacity .3s
  }
  .pagina-enter, .pagina-leave-active {
    opacity: 0
  }
</style>