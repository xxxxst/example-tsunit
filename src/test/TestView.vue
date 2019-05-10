<template>
<div class="test-view">
	<Aaa :isOk="isOk" ref="aaa"/>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Emit, Inject, Model, Prop, Provide, Watch } from 'vue-property-decorator';

import Aaa from "src/components/Aaa.vue";
import Assert, { TestClass, Test, AsyncTest, Ignore } from '@xxxxst/tsunit';

// mvvm test
@TestClass({autoRun:false})
class MVVMTest {
	app = null;
	constructor(_app){
		this.app = _app;
	}

	@AsyncTest()
	async dataTest() {
		var app = this.app as any;
		var aaa = app.$refs.aaa as any;

		app.isOk = false;
		await this.nextTick(()=>{
			Assert.equal('cancel', aaa.renderData);
		});

		app.isOk = true;
		await this.equal('ok', ()=>aaa.renderData);
		await this.notEqual('cancel', ()=>aaa.renderData);
	}

	async equal(except:any, actualFun:Function){
		await this.nextTick(()=>{
			Assert.equal(except, actualFun());
		});
	}

	async notEqual(except:any, actualFun:Function){
		await this.nextTick(()=>{
			Assert.notEqual(except, actualFun());
		});
	}

	async nextTick(cb){
		return new Promise(resolve=>{
			Vue.nextTick(()=>{
				cb&&cb();
				resolve();
			});
		})
	}
}

// test view
@Component({ components: { Aaa } })
export default class TestView extends Vue {
	isOk = true;
	created() {
		Assert.run(MVVMTest, this);
	}

	mounted() {
		
	}
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
.test-view { width: 100%; height: 100%; }
</style>
