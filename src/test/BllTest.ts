
import Assert, { TestClass, Test, Ignore, AsyncTest } from '@xxxxst/tsunit';

@TestClass()
export default class BllTest {
	@Test()
	aaaaabbbbbcccccdddddeeeeefffff() {
		Assert.equal(1, 1);
	}

	@Ignore()
	@Test()
	ignoreTest() {
		Assert.equal(2, 3);
	}

	@Ignore()
	@AsyncTest()
	async ignoreAsyncTest() {
		Assert.equal(2, 3);
	}

	@Test()
	successAssertTest() {
		Assert.success();
	}

	@AsyncTest()
	async asyncTest() {
		var rst = await this.getHttp();
		Assert.equal("data", rst);
	}

	async getHttp() {
		return new Promise(resolve => setTimeout(()=>{
			resolve("data");
		}, 0));
	}

	@Test(1, 1, 2)
	@Test("a", "a", "b")
	argumentTest(a, b, c) {
		Assert.equal(a, b);
		Assert.notEqual(b, c);
	}

	@Test()
	matchTest() {
		Assert.equal(1, 1);
		Assert.notEqual(1, 2);
		Assert.equal("aa", "aa");
		Assert.notEqual("aa", "bb");
		Assert.equal(true, true);
		Assert.equal(null, null);
		Assert.notEqual(true, false);
		Assert.equal("11", 11);
		Assert.strongNotEqual("11", 11, "");
		Assert.equal({ a: "11", b: { c: 4, d: 5 }, e: [{ f: "44", g: "55" }, { h: "66", i: 7 }] },
			{ a: "11", b: { c: 4, d: 5 }, e: [{ f: "44", g: "55" }, { h: "66", i: 7 }] });
		Assert.notEqual({ a: 1, b: "22" }, { a: 1 });
		Assert.notEqual({ a: 1 }, { a: 1, b: "22" });
		Assert.notEqual([1, 2, 3], [1, 2, 4]);
		Assert.equal([1, 2, 3], ["1", "2", "3"]);
		Assert.strongNotEqual([1, 2, 3], ["1", "2", "3"], "");
		Assert.notEqual({ a: "11", b: { c: 4, d: 5 }, e: [{ f: "44", g: "55" }, { h: "66", i: 7 }] },
			{ a: "11", b: { c: 4, d: 6 }, e: [{ f: "44", g: "55" }, { h: "66", i: 7 }] });
			
		Assert.isTrue("a");
		Assert.isFalse("");
		var a = { a: { b: [1, 2] } };
		Assert.same(a, a);
		Assert.notSame(a, { a: { b: [1, 2] } });
		Assert.isNull(null);
		Assert.isBool(true);
		Assert.isBool(false);
		Assert.isUndefined(undefined);
		Assert.isNumber(1);
		Assert.isObject({});
		Assert.isArray([]);
		Assert.isString("a");
		Assert.isEmpty(0);
		Assert.isEmpty(false);
		Assert.isEmpty("");
		Assert.isEmpty(undefined);
		Assert.isEmpty(null);
		Assert.isFalse(0);
		Assert.isFalse(false);
		Assert.isFalse("");
		Assert.isFalse(undefined);
		Assert.isFalse(null);
		Assert.isNotEmpty("a");
	}

	@Test()
	notUseAssertTest() {

	}

	@Test()
	failedAssertTest() {
		Assert.fail();
	}

	@Test()
	exceptionTest() {
		var a = {}["aa"]["aa"];
	}

	@Test()
	noMatchTest() {
		Assert.equal(1, 2, "info");
		Assert.strongEqual(11, "11", "");
		Assert.equal(true, false);
		Assert.equal({ a: { b: "aa" } }, { a: { b: "aab" } });
		Assert.equal([1, 2, 3], [1, 3, 3]);
		Assert.equal({ a: { b: [1, 2] } }, { a: { b: [1, 3] } });
		Assert.equal({ a: { b: [1, 2] } }, { a: { b: [1, "aa"] } });
		Assert.same({ a: { b: [1, 2] } }, { a: { b: [1, 2] } });
		Assert.same("aabbbbc", "aabcbbc");
		Assert.notEqual(1, 1);
		Assert.isTrue(null);
		Assert.isTrue(undefined);
		Assert.isTrue("");
		Assert.isTrue(0);
		Assert.isTrue(false);
		Assert.isNull("a");
		Assert.isNull(undefined);
		Assert.isBool("");
		Assert.isBool(0);
		Assert.isBool(undefined);
		Assert.isBool(null);
		Assert.isUndefined(null);
		Assert.isObject(null);
		Assert.isObject([]);
		Assert.isArray({});
	}

}
