class EventEmitter {
	constructor() {
		this.subEvent = {};
	}
	on(type, callback) {
		if (this.subEvent[type]) {
			this.subEvent[type].push(callback);
		} else {
			this.subEvent[type] = [];
			this.subEvent[type].push(callback);
		}
	}
	off(type, callback) {
		if (!callback) return;
		if (this.subEvent[type] && this.subEvent[type].length !== 0) {
			this.subEvent[type] = this.subEvent[type].filter(
				(item) => item !== callback
			);
		}
	}
	emit(type, ...args) {
		if (this.subEvent[type] && this.subEvent[type].length !== 0) {
			this.subEvent[type].forEach((callback) => {
				callback(...args);
			});
		}
	}
}
