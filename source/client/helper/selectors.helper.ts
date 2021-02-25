import get from 'lodash/get'

/**
 * Return store section by name
 *
 * Example:
 * store = { entity: {...} }
 * sectionSelector('entity') >> store.entity
 *
 * @param {string} path
 */
const sectionSelector = (path: string) => (state: any) => get(state, path);

export {
  sectionSelector,
}
