<template>
<div class="app">
	your home page
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({ components: {} })
export default class App extends Vue {

};
</script>

<style>
	html { height: 100%; font-size: 16px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); }
	body { height: 100%; overflow: hidden; margin: 0; padding: 0; font-size: 16px; background-color: #ffffff; }
	div,input,textarea,ul,li,label,a,table,tr,td { box-sizing: border-box; }
	input { outline: none; }
	table { border-collapse: collapse; table-layout:fixed; }
	tr,td { padding: 0px; }
	textarea { display: inline-block; resize:none; outline: none; }
	ul { list-style: none; margin: 0px; padding: 0px; vertical-align: top; }
	li { vertical-align: top; }
	a { text-decoration:none; outline:none; color: #000; }
</style>

<style >
.app { width: 100%; height: 100%; }
</style>
