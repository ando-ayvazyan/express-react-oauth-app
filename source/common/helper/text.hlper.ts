const formatTextPattern = (text: string, ...args: any[]): string => {
	if (!args.length) {
		return '';
	}

	return text.replace(/:[a-zA-Z]{0,}/g, (match) => args.length ? args.shift() : match);
};

const formatApiUrl = (text: string, ...args: any[]): string => {
	if (!args.length) {
		return text || '';
	}

	return text.replace(/{([a-zA-Z]{0,})}/g, (match) => args.length ? args.shift() : match)
};

export {
	formatApiUrl,
	formatTextPattern,
};