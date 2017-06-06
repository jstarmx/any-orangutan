import { identity, kebabCase, pickBy } from 'lodash';

const truthy = modifiers => pickBy(modifiers, identity);

export default (className, modifiers) => (
  Object.keys(truthy(modifiers))
    .reduce((classList, modifier) =>
      `${classList} ${className}--${kebabCase(modifier)}`,
    className)
);
