<template>
    <b-nav tabs>
        <b-nav-item v-for="rota in rotas" :key="rota">
            <router-link class="fw-bold text-decoration-none text-dark" :to="rota.path ? rota.path : '/'">
                {{rota.titulo}}
            </router-link>
        </b-nav-item>
    </b-nav>
</template>
<script>
export default {
    props: [
        'rotas'
    ]
}
</script>