<template>
<div>{{renderData}}</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Emit, Inject, Model, Prop, Provide, Watch } from 'vue-property-decorator';

// test component
@Component({ components: {} })
export default class Aaa extends Vue {
	@Prop({ type: Boolean, default: true }) isOk: boolean;
	renderData = "ok";

	@Watch("isOk")
	onDataChanged(){
		this.renderData = (this.isOk ? 'ok' : 'cancel');
	}
};
</script>

<style>

</style>
