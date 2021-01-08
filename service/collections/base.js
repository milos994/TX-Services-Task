const { v4: uuid } = require('uuid');
/**
 * Base Collection, return and manage collections data
 *
 * @class BaseCollection
 */
class BaseCollection {
	constructor(entries) {
		if (entries instanceof Array === false) {
			throw new TypeError('Entries must be an array.')
		}

		this.entries = entries;
	}

	/**
	 * @description Find all entries.
	 *
	 * @returns {Array} List of entries.
	 * @memberof BaseCollection
	 */
	findAll() {
		return [...this.entries];
	}

	/**
	 * @description Find entry by id.
	 *
	 * @param {String} id Entry id.
	 * @returns {Object} Entry data.
	 * @memberof BaseCollection
	 */
	findById(id) {
		return this.entries.find((entry) => entry.id === id);
	}

	/**
	 * @description Create new entry.
	 *
	 * @param {Object} data Data for creating entry.
	 * @returns {Object} New created entry.
	 * @memberof BaseCollection
	 */
	create(data) {
		const entry = { ...data, id: uuid() };
		this.entries.push(entry);

		return entry;
	}

	/**
	 * @description Delete entry by id.
	 *
	 * @param {String} id Entry id.
	 * @returns {String} Message whether is resource deleted or not.
	 * @memberof BaseCollection
	 */
	destroy(id) {
		const index = this.entries.findIndex((entry) => entry.id === id);

		if (index === -1) {
			return false;
		}

		this.entries.splice(index, 1);
		return true;
	}
}

module.exports = BaseCollection;