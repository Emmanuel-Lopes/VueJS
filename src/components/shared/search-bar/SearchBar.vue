<template>
    <b-input-group size="sm" class="ms-2 ps-1 m-3 mb-0 w-50" 
    @mouseleave="showSearchBar(false)">
        <b-input-group-prepend is-text class="shadow">
            <b-icon icon="search" id="icon" animation="throb" @mouseover="showSearchBar(true)"/>
        </b-input-group-prepend>
        <input type="search" id="searchBar" placeholder="Pesquise aqui"
        class="rounded-3 border border-2 border-muted ms-1 hide shadow"
        @blur="showSearchBar(false)"
        @input='searchFor($event.target.value)'>
    </b-input-group>
</template>
<script>
export default {
    
    methods: {
        searchFor(value) {
            this.$emit('search-for', value);
        },
        showSearchBar(show) {
            switch (show) {
                case true:
                    document.querySelector("#searchBar").classList.remove("hide");
                    break;

                case false:
                    document.querySelector("#searchBar").classList.add("hide");
                    break;
                default:
            }
        }
    }
}
</script>
<style scoped>
    .hide {
        display: none;
    }
</style>