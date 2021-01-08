class BaseError extends Error {
	constructor(status, message) {
		super(message);
		this.status = status;
	}

	toJSON() {
		return { message: this.message };
	}
}

module.exports = BaseError;