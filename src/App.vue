<template>
  <div class="container justify-content-center p-0">
      <NavBar :rotas="routes" />
    <router-view></router-view>
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

<style>
</style>