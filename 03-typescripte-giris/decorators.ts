function Dec() {
	return function(target, propertyKey: string, descriptor: PropertyDescriptor): any {
		console.log(arguments);
	};
}

class AClass {
	@Dec()
	method() {
		console.log("x");
	}
}