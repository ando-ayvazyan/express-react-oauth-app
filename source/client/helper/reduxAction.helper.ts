const registered: string[] = [];

class ReduxAction {
	constructor(public name: string) {
		if (registered.includes(name)) {
			throw Error(`DUPLICATE ACTION NAME: Action with name <${name}> is already have been registered!`);
		}

		registered.push(name);
		this.name = name;
	}

	normalizeName() {
		return this.name.toUpperCase();
	}

	get process() {
		return this.normalizeName();
	}

	get success() {
		return `${this.normalizeName()}-SUCCESS`;
	}

	get error() {
		return `${this.normalizeName()}-ERROR`;
	}
}

export {
	ReduxAction
}
