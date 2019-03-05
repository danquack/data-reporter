<template>
    <div id="app" class="container">
        <div id="logo">
            <img class="img-fluid" src="../assets/logo.png">
        </div>
        <div class="flex-container">
            <router-link to='/create' class="w-100">
                <button class="btn btn-selector  w-100">Create</button>
            </router-link>
            &nbsp;
            <router-link to='/list' class="w-100">
                <button class="btn btn-secondary w-100">View List</button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss">
    @import '../style.scss';
</style>