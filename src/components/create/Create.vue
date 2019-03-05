
<template>
    <div id="app">
        <div class="container">
            <ul class="nav nav-pills flex-container">
                <li class="text" v-bind:class="{ 'active': isDataState() }">
                    <a v-on:click="state='data'">Data</a>
                </li>
                <li class="text" v-bind:class="{ 'active': isMetaState() }">
                    <a v-on:click="state = 'metadata'">Header</a>
                </li>
            </ul>
            <div v-if="errorMessage != null" class="alert alert-danger" role="alert">
                Error: {{errorMessage}}
            </div>
            <div v-if="isMetaState()">
                <form id="metadata" @submit="upload">
                    <h3>Metadata</h3>
                    <div class="formgroup col-xs-6">
                        <label class="category" :for=date>Date</label>
                        <input type="date" size="40" v-model="date" class="form-control no-border" />
    
                        <div v-for="(item, pos) in meta" :key=pos>
                            <label class="category" :for=pos>{{pos.replace('_', ' ')}}</label>
                            <input size="40" v-model="meta[pos]" class="form-control no-border" />
                        </div>
                    </div>
                    <button class="btn btn-selector w-50" type="submit">Create Report</button>
                </form>
            </div>
            <div v-if="isDataState()">
                <form id="data">
                    <h3>Data Upload</h3>
                    <a class="btn btn-selector w-50" id="csvUpload" onclick="document.getElementById('file').click();">
                        <span v-if="this.filename == null">
                            Upload CSV
                        </span>
                        <span v-if="this.filename != null">
                            {{this.filename}} uploaded
                        </span>
                    </a>
                    <input type="file" style="display:none;" @change="onFileChange" id="file" name="file" />
                    <br>
                    <a v-on:click="state='metadata'" class="btn btn-selector w-50"><span>Next</span></a>
                </form>
            </div>
        </div>
    </div>
</template>

<script src="./create.js">
    
</script>

<style lang="scss">
    @import '../../style.scss';
</style>
