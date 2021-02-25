const DEF_TEXT = 'API error';

class ApiError extends Error {
	public code = 0;
	public description = '';

	constructor({ message = DEF_TEXT, code = 500, description = '' }) {
		super(message);
		this.code = code || 500;
		this.description = description;
	}
}

export {
	ApiError
};