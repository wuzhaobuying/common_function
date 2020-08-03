/**
 * ES5
 * 利用Object.create()创建一个以Parent原型作为__proto__的对象赋给Child.prototype
 */
function Parent() {}
function Child() {
	Parent.call(this);
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
