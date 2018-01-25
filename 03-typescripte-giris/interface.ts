interface ExampleInterface {
	prop1: string;
	prop2: number;
	method(param: string): number;
	inner: {
		prop1: boolean;
	}
}

type ExampleType = string | number;
type ExampleType2 = ExampleInterface | "Ali";

interface ExampleGeneric<T> {
	prop: T;
	method(param: T): T[];
}