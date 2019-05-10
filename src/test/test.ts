
import Vue from 'vue'

import Assert, { TestClass, Test, Ignore } from '@xxxxst/tsunit';

// test business logic
// dont't need to create the test class
import './BllTest';

// second way to import
// make sure the class is used
import BllTest from './BllTest';
BllTest

//test ui
import TestView from './TestView.vue';


// set language, default is english
// Built-in language:
// Assert.lang_en_us   english
// Assert.lang_zh_cn   chinese
Assert.setLang({
	typeNotEqual: "type not equal",
	notSameObject: "not the same object",
	info: "[  Info]",
	startTest: "test start：",
	notUseAssert: "not use Assert",
	millisecond: "ms",
	second: "s",
	minute: "m",
	successDesc: "    [Success] {funName} {time}",
	positionDesc: "at {position}",
	failedDesc: "{desc} failed(, {callName}), {url}(\r\n[Expect] {expected})(\r\n[Actual] {actual})",
	testEndDesc: "test Finished！Time:{time}\r\nSuccess：{success}\r\nFailed ：{failed}\r\nTotal  ：{total}",
	exceptionDesc: "{desc} failed, {info}",
	notUseAssertDesc: "{desc} failed，not use Assert",
});
Assert.setLang(Assert.lang_en_us);

// ui test
new Vue({
	el: '#app',
	components: { TestView },
	template: '<TestView/>'
});
