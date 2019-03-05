<template>
    <div class="container">
        <h3 class="text-center">Report</h3>
        <div class="row">
            <div class="col-md-4 col-xs-6">
                <span class="header">Project: </span>
                <span class="data">{{this.project}}</span>
            </div>
            <div class="col-md-4 col-xs-6">
                <span class="header">Location: </span>
                <span class="data">{{this.location}}</span>
            </div>
            <div class="col-md-4 col-xs-6">
                <span class="header">File Type: </span>
                <span class="data">{{this.file_type}}</span>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-xs-6">
                <span class="header">Frame Rate: </span>
                <span class="data">{{this.frame_rate}}</span>
            </div>
            <div class="col-md-4 col-xs-6">
                <span class="header">Sound Mixer: </span>
                <span class="data">{{this.sound_mixer}}</span>
            </div>
            <div class="col-md-4 col-xs-6">
                <span class="header">Phone: </span>
                <span class="data">{{this.phone}}</span>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-xs-6">
                <span class="header">Email: </span>
                <span class="data">{{this.email}}</span>
            </div>
            <div class="col-md-4 col-xs-6">
                <span class="header">Bit Depth: </span>
                <span class="data">{{this.bit_depth}}</span>
            </div>
            <div class="col-md-4 col-xs-6">
                <span class="header">Producer: </span>
                <span class="data">{{this.producer}}</span>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-xs-6">
                <span class="header">Sample Rate: </span>
                <span class="data">{{this.sample_rate}}</span>
            </div>
            <div class="col-md-4 col-xs-6">
                <span class="header">Director: </span>
                <span class="data">{{this.director}}</span>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-xs-6">
                <span class="header">Roll: </span>
                <span class="data">{{this.roll}}</span>
            </div>
            <div class="col-md-4 col-xs-6">
                <span class="header">Media: </span>
                <span class="data">{{this.media}}</span>
            </div>
            <div class="col-md-4 col-xs-6">
                <span class="header">Tone: </span>
                <span class="data">{{this.tone}}</span>
            </div>
        </div>
        <br>
        <div class="table-responsive" v-html="table_html">
        </div>
    </div>
</template>

<script src="./report.js">
    
</script>

<style lang="scss">
    @import '../../style.scss';
</style>