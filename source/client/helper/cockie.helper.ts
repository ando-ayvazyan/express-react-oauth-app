const parseDocumentCookies = (cookies: string) => Object
	.fromEntries(
		cookies
			.split('; ')
			.map(cookie => {
				const [ key, ...v ] = cookie.split('=');
				return [ key, v.join('=') ];
			})
	);

export {
	parseDocumentCookies,
};