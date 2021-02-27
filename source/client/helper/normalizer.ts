import keyBy from 'lodash/keyBy'

interface INormalizeResponseParams  {
	data: any,
	key?: string,
	transformer?: (data: any) => any
}

/**
 * @helper
 * normalises response collection by key
 */
const normalize = (collection: any[], key: string) => keyBy(collection, key);

/**
 * @helper
 * normalises api response
 */
const normalizeResponse = ({ data, key, transformer }: INormalizeResponseParams) => {
	if (Array.isArray(data)) {
		const collection = transformer ? data.map(transformer) : data;
		return key ? normalize(collection, key) : collection;
	} else if (transformer) {
		return transformer(data);
	} else {
		return data;
	}
};

export {
	normalize,
	normalizeResponse
}
