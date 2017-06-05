import { pickBy, kebabCase } from 'lodash';

export default (className, modifiers) => (
  Object.keys(pickBy(modifiers, _ => _))
    .map(modifier => `${className}--${kebabCase(modifier)}`)
    .reduce((classList, modifier) => `${classList} ${modifier}`, className)
);
