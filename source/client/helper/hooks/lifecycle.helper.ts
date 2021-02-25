import {EffectCallback, useEffect} from "react";

const onMount = (fn: EffectCallback) => useEffect(fn, []);

export {
	onMount,
};