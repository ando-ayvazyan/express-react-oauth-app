const formatTextPattern = (text: string, ...args: any[]): string => {
	if (!args.length) {
		return '';
	}

	return text.replace(/{(\d+)}/g, (match, number) => (
		(typeof args[number] !== 'undefined' && args[number] !== null) ? args[number] : ''
	))
};

const formatApiUrl = (text: string, ...args: any[]): string => {
	if (!args.length) {
		return '';
	}

	return text.replace(/{([a-z])}/g, (match, number) => (
		(typeof args[number] !== 'undefined' && args[number] !== null) ? args[number] : ''
	))
};

export {
	formatApiUrl,
	formatTextPattern,
};