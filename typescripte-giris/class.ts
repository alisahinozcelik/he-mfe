class ExampleClass {
	public prop: string;
}

interface ExampleInterface {
	method(): void;
}

class ExampleClass2 implements ExampleInterface {
	method() {

	}
}

class ExampleClass3 extends ExampleClass2 {
}

const example = new ExampleClass3();

example.method();