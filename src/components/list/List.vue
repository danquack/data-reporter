<template>
    <div id="app" class="container">
        <h3>Reports</h3>
        <table class="table">
            <tr v-for="item in items" :key="item.date + item.project">
                <router-link :to="{ path: 'report', query: { project: item['project'], date: item['date'] }}" v-if="item.project">
                    <td>
                        <span class="title">{{item['project']}}</span>
                        <br>
                        <span class="date">{{item['date'] | formatDate}}</span>
                    </td>
                    <td>
                        <font-awesome-icon icon="angle-right" />
                    </td>
                </router-link>
            </tr>
        </table>
        <button class="btn btn-selector w-100" v-on:click="getList()" v-if="next != null">View More</button>
    </div>
</template>

<script src="./list.js">
    
</script>

<style lang="scss">
    @import '../../style.scss';
</style>